import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Account, AggregateAccount } from './type'
import {
  AccountWhereUniqueInput,
  AccountWhereInput,
  AccountOrderByInput,
} from '../inputs'
import { AccountScalarFieldEnum } from '../enums'
export const accountQueries = {
  findUniqueAccount: {
    extensions: {
      model: 'Account',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Account,
    args: {
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.findUnique(args as any)
    },
  },
  findFirstAccount: {
    extensions: {
      model: 'Account',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Account,
    args: {
      where: { type: AccountWhereInput },
      orderBy: { type: new GraphQLList(AccountOrderByInput) },
      cursor: { type: AccountWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(AccountScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.findFirst(args as any)
    },
  },
  findManyAccount: {
    extensions: {
      model: 'Account',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Account))),
    args: {
      where: { type: AccountWhereInput },
      orderBy: { type: new GraphQLList(AccountOrderByInput) },
      cursor: { type: AccountWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(AccountScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.findMany(args as any)
    },
  },
  countAccount: {
    extensions: {
      model: 'Account',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: AccountWhereInput },
      orderBy: { type: new GraphQLList(AccountOrderByInput) },
      cursor: { type: AccountWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(AccountScalarFieldEnum) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.count(args as any)
    },
  },
  aggregateAccount: {
    extensions: {
      model: 'Account',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateAccount),
    args: {
      where: { type: AccountWhereInput },
      orderBy: { type: new GraphQLList(AccountOrderByInput) },
      cursor: { type: AccountWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.aggregate(args as any)
    },
  },
}
