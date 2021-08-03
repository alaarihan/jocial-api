import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Account } from './type'
import { AffectedRowsOutput } from '../types'
import {
  AccountCreateInput,
  AccountUpdateInput,
  AccountWhereUniqueInput,
  AccountWhereInput,
  AccountUpdateManyMutationInput,
  AccountCreateManyInput,
} from '../inputs'

export const accountMutations = {
  createOneAccount: {
    extensions: {
      model: 'Account',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Account),
    args: {
      data: { type: new GraphQLNonNull(AccountCreateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.create(args as any)
    },
  },
  updateOneAccount: {
    extensions: {
      model: 'Account',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Account),
    args: {
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
      data: { type: new GraphQLNonNull(AccountUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.update(args as any)
    },
  },
  deleteOneAccount: {
    extensions: {
      model: 'Account',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Account,
    args: {
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.delete(args as any)
    },
  },
  upsertOneAccount: {
    extensions: {
      model: 'Account',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Account),
    args: {
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
      create: { type: new GraphQLNonNull(AccountCreateInput) },
      update: { type: new GraphQLNonNull(AccountUpdateInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.upsert(args as any)
    },
  },
  createManyAccount: {
    extensions: {
      model: 'Account',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(AccountCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.createMany(args as any)
    },
  },
  updateManyAccount: {
    extensions: {
      model: 'Account',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(AccountWhereInput) },
      data: { type: new GraphQLNonNull(AccountUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.updateMany(args as any)
    },
  },
  deleteManyAccount: {
    extensions: {
      model: 'Account',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(AccountWhereInput) },
    },
    async resolve(_root, args, ctx) {
      return ctx.prisma.account.deleteMany(args as any)
    },
  },
}
