import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Log, AggregateLog } from './type'
import { LogWhereUniqueInput, LogWhereInput, LogOrderByInput } from '../inputs'
import { LogScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const logQueries = {
  findUniqueLog: {
    extensions: {
      model: 'Log',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Log,
    args: {
      where: { type: new GraphQLNonNull(LogWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.log.findUnique(args)
    },
  },
  findFirstLog: {
    extensions: {
      model: 'Log',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Log,
    args: {
      where: { type: LogWhereInput },
      orderBy: { type: new GraphQLList(LogOrderByInput) },
      cursor: { type: LogWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(LogScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.log.findFirst(args)
    },
  },
  findManyLog: {
    extensions: {
      model: 'Log',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Log))),
    args: {
      where: { type: LogWhereInput },
      orderBy: { type: new GraphQLList(LogOrderByInput) },
      cursor: { type: LogWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(LogScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.log.findMany(args)
    },
  },
  countLog: {
    extensions: {
      model: 'Log',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: LogWhereInput },
      orderBy: { type: new GraphQLList(LogOrderByInput) },
      cursor: { type: LogWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(LogScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.log.count(args)
    },
  },
  aggregateLog: {
    extensions: {
      model: 'Log',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateLog),
    args: {
      where: { type: LogWhereInput },
      orderBy: { type: new GraphQLList(LogOrderByInput) },
      cursor: { type: LogWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.log.aggregate(args)
    },
  },
}
