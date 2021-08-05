import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { Account } from './type'
import { AccountWhereInput, EnumPermissionTypeFilter } from '../inputs'
import { SubscriptionAction } from '../enums'
import { subscribeFunction } from '../../common/subscribeFunc'
import { AppContext } from '../../context'

export const AccountSubscription = new GraphQLObjectType({
  name: 'AccountSubscription',
  fields: () => ({
    action: {
      type: new GraphQLNonNull(SubscriptionAction),
    },
    data: {
      type: new GraphQLNonNull(Account),
    },
  }),
})
export const accountSubscriptions = {
  account: {
    extensions: {
      model: 'Account',
      op: 'Subscription',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AccountSubscription),
    args: {
      where: { type: AccountWhereInput },
      action: { type: EnumPermissionTypeFilter },
    },
    subscribe: subscribeFunction,
    resolve: async (root, args, ctx: AppContext) => {
      let data
      if (root.action === 'ACCOUNT_DELETED') {
        data = { id: root.id }
      } else {
        data = await ctx.prisma.account.findUnique({
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
