import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { User, AggregateUser } from './type'
import {
  UserWhereUniqueInput,
  UserWhereInput,
  UserOrderByInput,
} from '../inputs'
import { UserScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const userQueries = {
  findUniqueUser: {
    extensions: {
      model: 'User',
      op: 'findUnique',
      permType: 'READ',
    },
    type: User,
    args: {
      where: { type: new GraphQLNonNull(UserWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.user.findUnique(args)
    },
  },
  findFirstUser: {
    extensions: {
      model: 'User',
      op: 'findFirst',
      permType: 'READ',
    },
    type: User,
    args: {
      where: { type: UserWhereInput },
      orderBy: { type: new GraphQLList(UserOrderByInput) },
      cursor: { type: UserWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(UserScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.user.findFirst(args)
    },
  },
  findManyUser: {
    extensions: {
      model: 'User',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(User))),
    args: {
      where: { type: UserWhereInput },
      orderBy: { type: new GraphQLList(UserOrderByInput) },
      cursor: { type: UserWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(UserScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.user.findMany(args)
    },
  },
  countUser: {
    extensions: {
      model: 'User',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: UserWhereInput },
      orderBy: { type: new GraphQLList(UserOrderByInput) },
      cursor: { type: UserWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(UserScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.user.count(args)
    },
  },
  aggregateUser: {
    extensions: {
      model: 'User',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateUser),
    args: {
      where: { type: UserWhereInput },
      orderBy: { type: new GraphQLList(UserOrderByInput) },
      cursor: { type: UserWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.user.aggregate(args)
    },
  },
}
