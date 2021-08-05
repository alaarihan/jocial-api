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
import { AppContext } from '../../context'
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
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.account.create(args)
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
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.account.update(args)
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
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.account.delete(args)
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
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.account.upsert(args)
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
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.account.createMany(args)
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
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.account.updateMany(args)
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
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.account.deleteMany(args)
    },
  },
}
