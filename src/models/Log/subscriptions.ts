import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Log } from './type'
import { LogWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const LogSubscription = new GraphQLObjectType({
  name: 'LogSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Log),
    },
  }),
})
export const logSubscriptions = {
  log: {
    extensions: {
      model: 'Log',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(LogSubscription),
    args: {
      where: { type: LogWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'LOG_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.log.findUnique({
          where: { id: root.id },
          select: args.select.data.select,
        })
      }
      const result = {
        data,
        action: root.action,
      }
      return result
    },
  },
}
