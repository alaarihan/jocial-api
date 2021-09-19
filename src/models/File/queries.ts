import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { File, AggregateFile } from './type'
import {
  FileWhereUniqueInput,
  FileWhereInput,
  FileOrderByWithRelationInput,
} from '../inputs'
import { FileScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const fileQueries = {
  findUniqueFile: {
    extensions: {
      model: 'File',
      op: 'findUnique',
      permType: 'READ',
    },
    type: File,
    args: {
      where: { type: new GraphQLNonNull(FileWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.file.findUnique(args)
    },
  },
  findFirstFile: {
    extensions: {
      model: 'File',
      op: 'findFirst',
      permType: 'READ',
    },
    type: File,
    args: {
      where: { type: FileWhereInput },
      orderBy: { type: new GraphQLList(FileOrderByWithRelationInput) },
      cursor: { type: FileWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(FileScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.file.findFirst(args)
    },
  },
  findManyFile: {
    extensions: {
      model: 'File',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(File))),
    args: {
      where: { type: FileWhereInput },
      orderBy: { type: new GraphQLList(FileOrderByWithRelationInput) },
      cursor: { type: FileWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(FileScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.file.findMany(args)
    },
  },
  countFile: {
    extensions: {
      model: 'File',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: FileWhereInput },
      orderBy: { type: new GraphQLList(FileOrderByWithRelationInput) },
      cursor: { type: FileWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(FileScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.file.count(args)
    },
  },
  aggregateFile: {
    extensions: {
      model: 'File',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregateFile),
    args: {
      where: { type: FileWhereInput },
      orderBy: { type: new GraphQLList(FileOrderByWithRelationInput) },
      cursor: { type: FileWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.file.aggregate(args)
    },
  },
}
