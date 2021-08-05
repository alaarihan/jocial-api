import { GraphQLBoolean, GraphQLNonNull, GraphQLList } from 'graphql'
import { Permission } from './type'
import { AffectedRowsOutput } from '../types'
import {
  PermissionCreateInput,
  PermissionUpdateInput,
  PermissionWhereUniqueInput,
  PermissionWhereInput,
  PermissionUpdateManyMutationInput,
  PermissionCreateManyInput,
} from '../inputs'
import { AppContext } from '../../context'
export const permissionMutations = {
  createOnePermission: {
    extensions: {
      model: 'Permission',
      op: 'createOne',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(Permission),
    args: {
      data: { type: new GraphQLNonNull(PermissionCreateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.create(args)
    },
  },
  updateOnePermission: {
    extensions: {
      model: 'Permission',
      op: 'updateOne',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(Permission),
    args: {
      where: { type: new GraphQLNonNull(PermissionWhereUniqueInput) },
      data: { type: new GraphQLNonNull(PermissionUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.update(args)
    },
  },
  deleteOnePermission: {
    extensions: {
      model: 'Permission',
      op: 'deleteOne',
      permType: 'DELETE',
    },
    type: Permission,
    args: {
      where: { type: new GraphQLNonNull(PermissionWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.delete(args)
    },
  },
  upsertOnePermission: {
    extensions: {
      model: 'Permission',
      op: 'upsertOne',
      permType: 'UPSERT',
    },
    type: new GraphQLNonNull(Permission),
    args: {
      where: { type: new GraphQLNonNull(PermissionWhereUniqueInput) },
      create: { type: new GraphQLNonNull(PermissionCreateInput) },
      update: { type: new GraphQLNonNull(PermissionUpdateInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.upsert(args)
    },
  },
  createManyPermission: {
    extensions: {
      model: 'Permission',
      op: 'createMany',
      permType: 'CREATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      data: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(PermissionCreateManyInput)),
        ),
      },
      skipDuplicates: { type: GraphQLBoolean },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.createMany(args)
    },
  },
  updateManyPermission: {
    extensions: {
      model: 'Permission',
      op: 'updateMany',
      permType: 'UPDATE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PermissionWhereInput) },
      data: { type: new GraphQLNonNull(PermissionUpdateManyMutationInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.updateMany(args)
    },
  },
  deleteManyPermission: {
    extensions: {
      model: 'Permission',
      op: 'deleteMany',
      permType: 'DELETE',
    },
    type: new GraphQLNonNull(AffectedRowsOutput),
    args: {
      where: { type: new GraphQLNonNull(PermissionWhereInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.deleteMany(args)
    },
  },
}
