import { GraphQLEnumType } from 'graphql'

export const SubscriptionAction = new GraphQLEnumType({
  name: 'SubscriptionAction',
  values: {
    CREATE: { value: 'CREATE' },
    UPDATE: { value: 'UPDATE' },
    DELETE: { value: 'DELETE' },
  },
})

export const UserRole = new GraphQLEnumType({
  name: 'UserRole',
  values: {
    ROOT: { value: 'ROOT' },
    ADMIN: { value: 'ADMIN' },
    USER: { value: 'USER' },
    BLOCKED: { value: 'BLOCKED' },
    UNVERIFIED: { value: 'UNVERIFIED' },
    UNAUTHORIZED: { value: 'UNAUTHORIZED' },
  },
})

export const PermissionType = new GraphQLEnumType({
  name: 'PermissionType',
  values: {
    READ: { value: 'READ' },
    CREATE: { value: 'CREATE' },
    UPDATE: { value: 'UPDATE' },
    DELETE: { value: 'DELETE' },
  },
})

export const PermissionScalarFieldEnum = new GraphQLEnumType({
  name: 'PermissionScalarFieldEnum',
  values: {
    id: { value: 'id' },
    active: { value: 'active' },
    role: { value: 'role' },
    type: { value: 'type' },
    model: { value: 'model' },
    def: { value: 'def' },
  },
})

export const FileScalarFieldEnum = new GraphQLEnumType({
  name: 'FileScalarFieldEnum',
  values: {
    id: { value: 'id' },
    name: { value: 'name' },
    bucket: { value: 'bucket' },
    mimeType: { value: 'mimeType' },
    path: { value: 'path' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
    meta: { value: 'meta' },
    tags: { value: 'tags' },
  },
})

export const UserScalarFieldEnum = new GraphQLEnumType({
  name: 'UserScalarFieldEnum',
  values: {
    id: { value: 'id' },
    email: { value: 'email' },
    firstName: { value: 'firstName' },
    lastName: { value: 'lastName' },
    password: { value: 'password' },
    role: { value: 'role' },
    verificationToken: { value: 'verificationToken' },
    country: { value: 'country' },
    dateOfBirth: { value: 'dateOfBirth' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const AccountScalarFieldEnum = new GraphQLEnumType({
  name: 'AccountScalarFieldEnum',
  values: {
    id: { value: 'id' },
    ownerId: { value: 'ownerId' },
    name: { value: 'name' },
    email: { value: 'email' },
    phone: { value: 'phone' },
    username: { value: 'username' },
    password: { value: 'password' },
    pin: { value: 'pin' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const LogScalarFieldEnum = new GraphQLEnumType({
  name: 'LogScalarFieldEnum',
  values: {
    id: { value: 'id' },
    accountId: { value: 'accountId' },
    message: { value: 'message' },
    createdAt: { value: 'createdAt' },
    updatedAt: { value: 'updatedAt' },
  },
})

export const SortOrder = new GraphQLEnumType({
  name: 'SortOrder',
  values: {
    asc: { value: 'asc' },
    desc: { value: 'desc' },
  },
})

export const QueryMode = new GraphQLEnumType({
  name: 'QueryMode',
  values: {
    default: { value: 'default' },
    insensitive: { value: 'insensitive' },
  },
})
