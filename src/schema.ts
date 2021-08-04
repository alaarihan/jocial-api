import { authMutations, authQueries } from './auth'
import { logSubscriptions } from './models/subscriptions'
import { logQueries } from './models/queries'
import { logMutations } from './models/mutations'
import { accountSubscriptions } from './models/subscriptions'
import { accountQueries } from './models/queries'
import { accountMutations } from './models/mutations'
import { userSubscriptions } from './models/subscriptions'
import { userQueries } from './models/queries'
import { userMutations } from './models/mutations'
import { fileSubscriptions } from './models/subscriptions'
import { fileQueries } from './models/queries'
import { fileMutations } from './models/mutations'
import { permissionSubscriptions } from './models/subscriptions'
import { permissionQueries } from './models/queries'
import { permissionMutations } from './models/mutations'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // merge_the_query_fields_here
      ...authQueries,
      ...logQueries,
      ...accountQueries,
      ...userQueries,
      ...fileQueries,
      ...permissionQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // merge_the_mutation_fields_here
      ...authMutations,
      ...logMutations,
      ...accountMutations,
      ...userMutations,
      ...fileMutations,
      ...permissionMutations,
    },
  }),
  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
      // merge_the_subscription_fields_here
      ...logSubscriptions,
      ...accountSubscriptions,
      ...userSubscriptions,
      ...fileSubscriptions,
      ...permissionSubscriptions,
    },
  }),
})
