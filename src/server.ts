import fastify from 'fastify'
import mercurius from 'mercurius'
import { applyMiddleware } from 'graphql-middleware'
import fetch from 'node-fetch'
import { acl, getRoleSchemaCache } from './auth'
import { schema as mainSchema } from './schema'
import { createContext, AppContext } from './context'
import { prismaSelect, subscriptionsMiddleware } from './middlewares'
import { NoIntrospection } from './common/noIntrospection'

const schemaWithMiddlewares = applyMiddleware(
  mainSchema,
  prismaSelect,
  subscriptionsMiddleware,
  // add_middlewares
  acl,
)
const app = fastify()

async function start() {
  app.register(require('fastify-cors'), {
    origin: true,
    credentials: true,
  })
  app.register(require('fastify-cookie'))
  app.register(require('fastify-multipart'))

  app.register(require('./files'))

  app.register(mercurius, {
    schema: schemaWithMiddlewares,
    context: createContext,
    graphiql: process.env.INTROSPECTIONS==='on',
    subscription: {
      context: (_, req) => {
        return createContext(req)
      },
    },
    allowBatchedQueries: true,
    validationRules: [NoIntrospection],
  })

  app.register(require('./auth/src/routes'))

  app.post('/callWebhook', async (req, reply) => {
    if (req.headers['secret'] !== process.env.ROOT_SECRET) {
      return reply.status(403).send('Unauthorized!')
    }
    await fetch(req.body['webhook'])
    return reply.status(200).send('The url has been called successfully.')
  })

  await app.ready()
  app.graphql.addHook(
    'preParsing',
    async function (_schema, _source, ctx: AppContext) {
      try {
        if (ctx.user?.role !== 'ROOT') {
          const roleSchema = await getRoleSchemaCache(
            schemaWithMiddlewares,
            ctx.user.role,
          )
          ctx.app.graphql.replaceSchema(roleSchema)
        } else {
          ctx.app.graphql.replaceSchema(schemaWithMiddlewares)
        }
      } catch (err) {
        throw err
      }
    },
  )

  app
    .listen(process.env.PORT || 3000)
    .then(() =>
      console.log(`🚀 Server ready at ${process.env.API_URL}/graphiql`),
    )
    .catch((err) => {
      console.log(err)
    })
}

start()
