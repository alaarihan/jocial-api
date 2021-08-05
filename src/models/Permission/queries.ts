import { GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql'
import { Permission, AggregatePermission } from './type'
import {
  PermissionWhereUniqueInput,
  PermissionWhereInput,
  PermissionOrderByInput,
} from '../inputs'
import { PermissionScalarFieldEnum } from '../enums'
import { AppContext } from '../../context'
export const permissionQueries = {
  findUniquePermission: {
    extensions: {
      model: 'Permission',
      op: 'findUnique',
      permType: 'READ',
    },
    type: Permission,
    args: {
      where: { type: new GraphQLNonNull(PermissionWhereUniqueInput) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.findUnique(args)
    },
  },
  findFirstPermission: {
    extensions: {
      model: 'Permission',
      op: 'findFirst',
      permType: 'READ',
    },
    type: Permission,
    args: {
      where: { type: PermissionWhereInput },
      orderBy: { type: new GraphQLList(PermissionOrderByInput) },
      cursor: { type: PermissionWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PermissionScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.findFirst(args)
    },
  },
  findManyPermission: {
    extensions: {
      model: 'Permission',
      op: 'findMany',
      permType: 'READ',
    },
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Permission))),
    args: {
      where: { type: PermissionWhereInput },
      orderBy: { type: new GraphQLList(PermissionOrderByInput) },
      cursor: { type: PermissionWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PermissionScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.findMany(args)
    },
  },
  countPermission: {
    extensions: {
      model: 'Permission',
      op: 'count',
      permType: 'READ',
    },
    type: new GraphQLNonNull(GraphQLInt),
    args: {
      where: { type: PermissionWhereInput },
      orderBy: { type: new GraphQLList(PermissionOrderByInput) },
      cursor: { type: PermissionWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
      distinct: { type: new GraphQLList(PermissionScalarFieldEnum) },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.count(args)
    },
  },
  aggregatePermission: {
    extensions: {
      model: 'Permission',
      op: 'aggregate',
      permType: 'READ',
    },
    type: new GraphQLNonNull(AggregatePermission),
    args: {
      where: { type: PermissionWhereInput },
      orderBy: { type: new GraphQLList(PermissionOrderByInput) },
      cursor: { type: PermissionWhereUniqueInput },
      skip: { type: GraphQLInt },
      take: { type: GraphQLInt },
    },
    async resolve(_root, args, ctx: AppContext) {
      return ctx.prisma.permission.aggregate(args)
    },
  },
}
