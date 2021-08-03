import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Log } from './type'
import { AffectedRowsOutput } from '../types'
import {
  LogCreateInput,
  LogUpdateInput,
  LogWhereUniqueInput,
  LogWhereInput,
  LogUpdateManyMutationInput,
  LogCreateManyInput,
} from '../inputs'

export const logMutations = {
  createOneLog: {
    extensions: {
      model: 'Log',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Log),
    args: {
      data: { type: new GraphQLNonNull(LogCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.log.create(args as any)
    },
  },
  updateOneLog: {
    extensions: {
      model: 'Log',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Log),
    args: {
      where: { type: new GraphQLNonNull(LogWhereUniqueInput) },
      data: { type: new GraphQLNonNull(LogUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.log.update(args as any)
    },
  },
  deleteOneLog: {
    extensions: {
      model: 'Log',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Log,
    args: {
      where: { type: new GraphQLNonNull(LogWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.log.delete(args as any)
    },
  },
  upsertOneLog: {
    extensions: {
      model: 'Log',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Log),
    args: {
      where: { type: new GraphQLNonNull(LogWhereUniqueInput) },
      create: { type: new GraphQLNonNull(LogCreateInput) },
      update: { type: new GraphQLNonNull(LogUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.log.upsert(args as any)
    },
  },
  createManyLog: {
    extensions: {
      model: 'Log',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(LogCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.log.createMany(args as any)
    },
  },
  updateManyLog: {
    extensions: {
      model: 'Log',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(LogWhereInput) },
      data: { type: new GraphQLNonNull(LogUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.log.updateMany(args as any)
    },
  },
  deleteManyLog: {
    extensions: {
      model: 'Log',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(LogWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.log.deleteMany(args as any)
    },
  },
}
