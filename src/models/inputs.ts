import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from 'graphql'
import { GraphQLDateTime, GraphQLJSON } from 'graphql-scalars'

import {
  UserRole,
  PermissionType,
  AccountStatus,
  LogType,
  PermissionScalarFieldEnum,
  FileScalarFieldEnum,
  UserScalarFieldEnum,
  AccountScalarFieldEnum,
  LogScalarFieldEnum,
  SortOrder,
  QueryMode,
} from './enums'

export const SimpleStringFilter = new GraphQLInputObjectType({
  name: 'SimpleStringFilter',
  fields: () => ({
    equals: {
      type: GraphQLString,
    },
    in: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
    notIn: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
    },
  }),
})

export const PermissionWhereInput = new GraphQLInputObjectType({
  name: 'PermissionWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(PermissionWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(PermissionWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(PermissionWhereInput)) },
    id: { type: IntFilter },
    active: { type: BoolFilter },
    role: { type: EnumUserRoleFilter },
    type: { type: EnumPermissionTypeFilter },
    model: { type: StringFilter },
    def: { type: JsonNullableFilter },
  }),
})

export const PermissionOrderByInput = new GraphQLInputObjectType({
  name: 'PermissionOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    active: { type: SortOrder },
    role: { type: SortOrder },
    type: { type: SortOrder },
    model: { type: SortOrder },
    def: { type: SortOrder },
  }),
})

export const PermissionWhereUniqueInput = new GraphQLInputObjectType({
  name: 'PermissionWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
    role_type_model: { type: PermissionRoleTypeModelCompoundUniqueInput },
  }),
})

export const PermissionScalarWhereWithAggregatesInput =
  new GraphQLInputObjectType({
    name: 'PermissionScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(PermissionScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(PermissionScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(PermissionScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      active: { type: BoolWithAggregatesFilter },
      role: { type: EnumUserRoleWithAggregatesFilter },
      type: { type: EnumPermissionTypeWithAggregatesFilter },
      model: { type: StringWithAggregatesFilter },
      def: { type: JsonNullableWithAggregatesFilter },
    }),
  })

export const FileWhereInput = new GraphQLInputObjectType({
  name: 'FileWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(FileWhereInput)) },
    id: { type: IntFilter },
    name: { type: StringFilter },
    bucket: { type: StringFilter },
    mimeType: { type: StringFilter },
    path: { type: StringFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    meta: { type: JsonNullableFilter },
    tags: { type: StringNullableListFilter },
  }),
})

export const FileOrderByInput = new GraphQLInputObjectType({
  name: 'FileOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    name: { type: SortOrder },
    bucket: { type: SortOrder },
    mimeType: { type: SortOrder },
    path: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
    meta: { type: SortOrder },
    tags: { type: SortOrder },
  }),
})

export const FileWhereUniqueInput = new GraphQLInputObjectType({
  name: 'FileWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
    bucket_path: { type: FileBucketPathCompoundUniqueInput },
  }),
})

export const FileScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'FileScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(FileScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    name: { type: StringWithAggregatesFilter },
    bucket: { type: StringWithAggregatesFilter },
    mimeType: { type: StringWithAggregatesFilter },
    path: { type: StringWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
    meta: { type: JsonNullableWithAggregatesFilter },
    tags: { type: StringNullableListFilter },
  }),
})

export const UserWhereInput = new GraphQLInputObjectType({
  name: 'UserWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(UserWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(UserWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(UserWhereInput)) },
    id: { type: IntFilter },
    email: { type: StringFilter },
    firstName: { type: StringNullableFilter },
    lastName: { type: StringNullableFilter },
    password: { type: StringFilter },
    role: { type: EnumUserRoleFilter },
    verificationToken: { type: StringNullableFilter },
    country: { type: StringNullableFilter },
    dateOfBirth: { type: DateTimeNullableFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    accounts: { type: AccountListRelationFilter },
  }),
})

export const UserOrderByInput = new GraphQLInputObjectType({
  name: 'UserOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    email: { type: SortOrder },
    firstName: { type: SortOrder },
    lastName: { type: SortOrder },
    password: { type: SortOrder },
    role: { type: SortOrder },
    verificationToken: { type: SortOrder },
    country: { type: SortOrder },
    dateOfBirth: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const UserWhereUniqueInput = new GraphQLInputObjectType({
  name: 'UserWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
  }),
})

export const UserScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'UserScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(UserScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(UserScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(UserScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    email: { type: StringWithAggregatesFilter },
    firstName: { type: StringNullableWithAggregatesFilter },
    lastName: { type: StringNullableWithAggregatesFilter },
    password: { type: StringWithAggregatesFilter },
    role: { type: EnumUserRoleWithAggregatesFilter },
    verificationToken: { type: StringNullableWithAggregatesFilter },
    country: { type: StringNullableWithAggregatesFilter },
    dateOfBirth: { type: DateTimeNullableWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
  }),
})

export const AccountWhereInput = new GraphQLInputObjectType({
  name: 'AccountWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(AccountWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(AccountWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(AccountWhereInput)) },
    id: { type: IntFilter },
    ownerId: { type: IntFilter },
    name: { type: StringNullableFilter },
    email: { type: StringNullableFilter },
    phone: { type: StringFilter },
    username: { type: StringFilter },
    password: { type: StringFilter },
    pin: { type: IntFilter },
    lastActivity: { type: DateTimeFilter },
    status: { type: EnumAccountStatusFilter },
    statusDuration: { type: IntFilter },
    loginActivity: { type: EnumAccountStatusFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    owner: { type: UserWhereInput },
    logs: { type: LogListRelationFilter },
  }),
})

export const AccountOrderByInput = new GraphQLInputObjectType({
  name: 'AccountOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    ownerId: { type: SortOrder },
    name: { type: SortOrder },
    email: { type: SortOrder },
    phone: { type: SortOrder },
    username: { type: SortOrder },
    password: { type: SortOrder },
    pin: { type: SortOrder },
    lastActivity: { type: SortOrder },
    status: { type: SortOrder },
    statusDuration: { type: SortOrder },
    loginActivity: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const AccountWhereUniqueInput = new GraphQLInputObjectType({
  name: 'AccountWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const AccountScalarWhereWithAggregatesInput = new GraphQLInputObjectType(
  {
    name: 'AccountScalarWhereWithAggregatesInput',
    fields: () => ({
      AND: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountScalarWhereWithAggregatesInput),
        ),
      },
      OR: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountScalarWhereWithAggregatesInput),
        ),
      },
      NOT: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountScalarWhereWithAggregatesInput),
        ),
      },
      id: { type: IntWithAggregatesFilter },
      ownerId: { type: IntWithAggregatesFilter },
      name: { type: StringNullableWithAggregatesFilter },
      email: { type: StringNullableWithAggregatesFilter },
      phone: { type: StringWithAggregatesFilter },
      username: { type: StringWithAggregatesFilter },
      password: { type: StringWithAggregatesFilter },
      pin: { type: IntWithAggregatesFilter },
      lastActivity: { type: DateTimeWithAggregatesFilter },
      status: { type: EnumAccountStatusWithAggregatesFilter },
      statusDuration: { type: IntWithAggregatesFilter },
      loginActivity: { type: EnumAccountStatusWithAggregatesFilter },
      createdAt: { type: DateTimeWithAggregatesFilter },
      updatedAt: { type: DateTimeWithAggregatesFilter },
    }),
  },
)

export const LogWhereInput = new GraphQLInputObjectType({
  name: 'LogWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(LogWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(LogWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(LogWhereInput)) },
    id: { type: IntFilter },
    accountId: { type: IntNullableFilter },
    type: { type: EnumLogTypeFilter },
    message: { type: StringFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
    account: { type: AccountWhereInput },
  }),
})

export const LogOrderByInput = new GraphQLInputObjectType({
  name: 'LogOrderByInput',
  fields: () => ({
    id: { type: SortOrder },
    accountId: { type: SortOrder },
    type: { type: SortOrder },
    message: { type: SortOrder },
    createdAt: { type: SortOrder },
    updatedAt: { type: SortOrder },
  }),
})

export const LogWhereUniqueInput = new GraphQLInputObjectType({
  name: 'LogWhereUniqueInput',
  fields: () => ({
    id: { type: GraphQLInt },
  }),
})

export const LogScalarWhereWithAggregatesInput = new GraphQLInputObjectType({
  name: 'LogScalarWhereWithAggregatesInput',
  fields: () => ({
    AND: {
      type: new GraphQLList(
        new GraphQLNonNull(LogScalarWhereWithAggregatesInput),
      ),
    },
    OR: {
      type: new GraphQLList(
        new GraphQLNonNull(LogScalarWhereWithAggregatesInput),
      ),
    },
    NOT: {
      type: new GraphQLList(
        new GraphQLNonNull(LogScalarWhereWithAggregatesInput),
      ),
    },
    id: { type: IntWithAggregatesFilter },
    accountId: { type: IntNullableWithAggregatesFilter },
    type: { type: EnumLogTypeWithAggregatesFilter },
    message: { type: StringWithAggregatesFilter },
    createdAt: { type: DateTimeWithAggregatesFilter },
    updatedAt: { type: DateTimeWithAggregatesFilter },
  }),
})

export const PermissionCreateInput = new GraphQLInputObjectType({
  name: 'PermissionCreateInput',
  fields: () => ({
    active: { type: GraphQLBoolean },
    role: { type: new GraphQLNonNull(UserRole) },
    type: { type: new GraphQLNonNull(PermissionType) },
    model: { type: new GraphQLNonNull(GraphQLString) },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'PermissionUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: new GraphQLNonNull(UserRole) },
    type: { type: new GraphQLNonNull(PermissionType) },
    model: { type: new GraphQLNonNull(GraphQLString) },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUpdateInput = new GraphQLInputObjectType({
  name: 'PermissionUpdateInput',
  fields: () => ({
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'PermissionUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionCreateManyInput = new GraphQLInputObjectType({
  name: 'PermissionCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: new GraphQLNonNull(UserRole) },
    type: { type: new GraphQLNonNull(PermissionType) },
    model: { type: new GraphQLNonNull(GraphQLString) },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'PermissionUpdateManyMutationInput',
  fields: () => ({
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const PermissionUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'PermissionUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    active: { type: GraphQLBoolean },
    role: { type: UserRole },
    type: { type: PermissionType },
    model: { type: GraphQLString },
    def: { type: GraphQLJSON },
  }),
})

export const FileCreateInput = new GraphQLInputObjectType({
  name: 'FileCreateInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'FileUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUpdateInput = new GraphQLInputObjectType({
  name: 'FileUpdateInput',
  fields: () => ({
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'FileUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileCreateManyInput = new GraphQLInputObjectType({
  name: 'FileCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: new GraphQLNonNull(GraphQLString) },
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    mimeType: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'FileUpdateManyMutationInput',
  fields: () => ({
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'FileUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    bucket: { type: GraphQLString },
    mimeType: { type: GraphQLString },
    path: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    meta: { type: GraphQLJSON },
    tags: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const UserCreateInput = new GraphQLInputObjectType({
  name: 'UserCreateInput',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    accounts: { type: AccountCreateNestedManyWithoutOwnerInput },
  }),
})

export const UserUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'UserUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    accounts: { type: AccountUncheckedCreateNestedManyWithoutOwnerInput },
  }),
})

export const UserUpdateInput = new GraphQLInputObjectType({
  name: 'UserUpdateInput',
  fields: () => ({
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    accounts: { type: AccountUpdateManyWithoutOwnerInput },
  }),
})

export const UserUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'UserUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    accounts: { type: AccountUncheckedUpdateManyWithoutOwnerInput },
  }),
})

export const UserCreateManyInput = new GraphQLInputObjectType({
  name: 'UserCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'UserUpdateManyMutationInput',
  fields: () => ({
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'UserUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const AccountCreateInput = new GraphQLInputObjectType({
  name: 'AccountCreateInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    pin: { type: new GraphQLNonNull(GraphQLInt) },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    owner: {
      type: new GraphQLNonNull(UserCreateNestedOneWithoutAccountsInput),
    },
    logs: { type: LogCreateNestedManyWithoutAccountInput },
  }),
})

export const AccountUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'AccountUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    ownerId: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    pin: { type: new GraphQLNonNull(GraphQLInt) },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    logs: { type: LogUncheckedCreateNestedManyWithoutAccountInput },
  }),
})

export const AccountUpdateInput = new GraphQLInputObjectType({
  name: 'AccountUpdateInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    pin: { type: GraphQLInt },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    owner: { type: UserUpdateOneRequiredWithoutAccountsInput },
    logs: { type: LogUpdateManyWithoutAccountInput },
  }),
})

export const AccountUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'AccountUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    ownerId: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    pin: { type: GraphQLInt },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    logs: { type: LogUncheckedUpdateManyWithoutAccountInput },
  }),
})

export const AccountCreateManyInput = new GraphQLInputObjectType({
  name: 'AccountCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    ownerId: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    pin: { type: new GraphQLNonNull(GraphQLInt) },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const AccountUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'AccountUpdateManyMutationInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    pin: { type: GraphQLInt },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const AccountUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'AccountUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    ownerId: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    pin: { type: GraphQLInt },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogCreateInput = new GraphQLInputObjectType({
  name: 'LogCreateInput',
  fields: () => ({
    type: { type: LogType },
    message: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    account: { type: AccountCreateNestedOneWithoutLogsInput },
  }),
})

export const LogUncheckedCreateInput = new GraphQLInputObjectType({
  name: 'LogUncheckedCreateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogUpdateInput = new GraphQLInputObjectType({
  name: 'LogUpdateInput',
  fields: () => ({
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    account: { type: AccountUpdateOneWithoutLogsInput },
  }),
})

export const LogUncheckedUpdateInput = new GraphQLInputObjectType({
  name: 'LogUncheckedUpdateInput',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogCreateManyInput = new GraphQLInputObjectType({
  name: 'LogCreateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogUpdateManyMutationInput = new GraphQLInputObjectType({
  name: 'LogUpdateManyMutationInput',
  fields: () => ({
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogUncheckedUpdateManyInput = new GraphQLInputObjectType({
  name: 'LogUncheckedUpdateManyInput',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const IntFilter = new GraphQLInputObjectType({
  name: 'IntFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntFilter },
  }),
})

export const BoolFilter = new GraphQLInputObjectType({
  name: 'BoolFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolFilter },
  }),
})

export const EnumUserRoleFilter = new GraphQLInputObjectType({
  name: 'EnumUserRoleFilter',
  fields: () => ({
    equals: { type: UserRole },
    in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    not: { type: NestedEnumUserRoleFilter },
  }),
})

export const EnumPermissionTypeFilter = new GraphQLInputObjectType({
  name: 'EnumPermissionTypeFilter',
  fields: () => ({
    equals: { type: PermissionType },
    in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    not: { type: NestedEnumPermissionTypeFilter },
  }),
})

export const StringFilter = new GraphQLInputObjectType({
  name: 'StringFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringFilter },
  }),
})

export const JsonNullableFilter = new GraphQLInputObjectType({
  name: 'JsonNullableFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
  }),
})

export const PermissionRoleTypeModelCompoundUniqueInput =
  new GraphQLInputObjectType({
    name: 'PermissionRoleTypeModelCompoundUniqueInput',
    fields: () => ({
      role: { type: new GraphQLNonNull(UserRole) },
      type: { type: new GraphQLNonNull(PermissionType) },
      model: { type: new GraphQLNonNull(GraphQLString) },
    }),
  })

export const IntWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'IntWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _avg: { type: NestedFloatFilter },
    avg: { type: NestedFloatFilter },
    _sum: { type: NestedIntFilter },
    sum: { type: NestedIntFilter },
    _min: { type: NestedIntFilter },
    min: { type: NestedIntFilter },
    _max: { type: NestedIntFilter },
    max: { type: NestedIntFilter },
  }),
})

export const BoolWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'BoolWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedBoolFilter },
    min: { type: NestedBoolFilter },
    _max: { type: NestedBoolFilter },
    max: { type: NestedBoolFilter },
  }),
})

export const EnumUserRoleWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'EnumUserRoleWithAggregatesFilter',
  fields: () => ({
    equals: { type: UserRole },
    in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    not: { type: NestedEnumUserRoleWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedEnumUserRoleFilter },
    min: { type: NestedEnumUserRoleFilter },
    _max: { type: NestedEnumUserRoleFilter },
    max: { type: NestedEnumUserRoleFilter },
  }),
})

export const EnumPermissionTypeWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'EnumPermissionTypeWithAggregatesFilter',
    fields: () => ({
      equals: { type: PermissionType },
      in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      not: { type: NestedEnumPermissionTypeWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumPermissionTypeFilter },
      min: { type: NestedEnumPermissionTypeFilter },
      _max: { type: NestedEnumPermissionTypeFilter },
      max: { type: NestedEnumPermissionTypeFilter },
    }),
  })

export const StringWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'StringWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedStringFilter },
    min: { type: NestedStringFilter },
    _max: { type: NestedStringFilter },
    max: { type: NestedStringFilter },
  }),
})

export const JsonNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'JsonNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _min: { type: NestedJsonNullableFilter },
    min: { type: NestedJsonNullableFilter },
    _max: { type: NestedJsonNullableFilter },
    max: { type: NestedJsonNullableFilter },
  }),
})

export const DateTimeFilter = new GraphQLInputObjectType({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeFilter },
  }),
})

export const StringNullableListFilter = new GraphQLInputObjectType({
  name: 'StringNullableListFilter',
  fields: () => ({
    equals: { type: new GraphQLList(GraphQLString) },
    has: { type: GraphQLString },
    hasEvery: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    hasSome: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    isEmpty: { type: GraphQLBoolean },
  }),
})

export const FileBucketPathCompoundUniqueInput = new GraphQLInputObjectType({
  name: 'FileBucketPathCompoundUniqueInput',
  fields: () => ({
    bucket: { type: new GraphQLNonNull(GraphQLString) },
    path: { type: new GraphQLNonNull(GraphQLString) },
  }),
})

export const DateTimeWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'DateTimeWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedDateTimeFilter },
    min: { type: NestedDateTimeFilter },
    _max: { type: NestedDateTimeFilter },
    max: { type: NestedDateTimeFilter },
  }),
})

export const StringNullableFilter = new GraphQLInputObjectType({
  name: 'StringNullableFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringNullableFilter },
  }),
})

export const DateTimeNullableFilter = new GraphQLInputObjectType({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableFilter },
  }),
})

export const AccountListRelationFilter = new GraphQLInputObjectType({
  name: 'AccountListRelationFilter',
  fields: () => ({
    every: { type: AccountWhereInput },
    some: { type: AccountWhereInput },
    none: { type: AccountWhereInput },
  }),
})

export const StringNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'StringNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    mode: { type: QueryMode },
    not: { type: NestedStringNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _min: { type: NestedStringNullableFilter },
    min: { type: NestedStringNullableFilter },
    _max: { type: NestedStringNullableFilter },
    max: { type: NestedStringNullableFilter },
  }),
})

export const DateTimeNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'DateTimeNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _min: { type: NestedDateTimeNullableFilter },
    min: { type: NestedDateTimeNullableFilter },
    _max: { type: NestedDateTimeNullableFilter },
    max: { type: NestedDateTimeNullableFilter },
  }),
})

export const EnumAccountStatusFilter = new GraphQLInputObjectType({
  name: 'EnumAccountStatusFilter',
  fields: () => ({
    equals: { type: AccountStatus },
    in: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
    not: { type: NestedEnumAccountStatusFilter },
  }),
})

export const UserRelationFilter = new GraphQLInputObjectType({
  name: 'UserRelationFilter',
  fields: () => ({
    is: { type: UserWhereInput },
    isNot: { type: UserWhereInput },
  }),
})

export const LogListRelationFilter = new GraphQLInputObjectType({
  name: 'LogListRelationFilter',
  fields: () => ({
    every: { type: LogWhereInput },
    some: { type: LogWhereInput },
    none: { type: LogWhereInput },
  }),
})

export const EnumAccountStatusWithAggregatesFilter = new GraphQLInputObjectType(
  {
    name: 'EnumAccountStatusWithAggregatesFilter',
    fields: () => ({
      equals: { type: AccountStatus },
      in: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
      not: { type: NestedEnumAccountStatusWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumAccountStatusFilter },
      min: { type: NestedEnumAccountStatusFilter },
      _max: { type: NestedEnumAccountStatusFilter },
      max: { type: NestedEnumAccountStatusFilter },
    }),
  },
)

export const IntNullableFilter = new GraphQLInputObjectType({
  name: 'IntNullableFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableFilter },
  }),
})

export const EnumLogTypeFilter = new GraphQLInputObjectType({
  name: 'EnumLogTypeFilter',
  fields: () => ({
    equals: { type: LogType },
    in: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
    not: { type: NestedEnumLogTypeFilter },
  }),
})

export const AccountRelationFilter = new GraphQLInputObjectType({
  name: 'AccountRelationFilter',
  fields: () => ({
    is: { type: AccountWhereInput },
    isNot: { type: AccountWhereInput },
  }),
})

export const IntNullableWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'IntNullableWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableWithAggregatesFilter },
    _count: { type: NestedIntNullableFilter },
    count: { type: NestedIntNullableFilter },
    _avg: { type: NestedFloatNullableFilter },
    avg: { type: NestedFloatNullableFilter },
    _sum: { type: NestedIntNullableFilter },
    sum: { type: NestedIntNullableFilter },
    _min: { type: NestedIntNullableFilter },
    min: { type: NestedIntNullableFilter },
    _max: { type: NestedIntNullableFilter },
    max: { type: NestedIntNullableFilter },
  }),
})

export const EnumLogTypeWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'EnumLogTypeWithAggregatesFilter',
  fields: () => ({
    equals: { type: LogType },
    in: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
    not: { type: NestedEnumLogTypeWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedEnumLogTypeFilter },
    min: { type: NestedEnumLogTypeFilter },
    _max: { type: NestedEnumLogTypeFilter },
    max: { type: NestedEnumLogTypeFilter },
  }),
})

export const BoolFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'BoolFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLBoolean },
  }),
})

export const EnumUserRoleFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumUserRoleFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: UserRole },
    }),
  })

export const EnumPermissionTypeFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumPermissionTypeFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: PermissionType },
    }),
  })

export const StringFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'StringFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLString },
  }),
})

export const IntFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'IntFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLInt },
    increment: { type: GraphQLInt },
    decrement: { type: GraphQLInt },
    multiply: { type: GraphQLInt },
    divide: { type: GraphQLInt },
  }),
})

export const FileCreatetagsInput = new GraphQLInputObjectType({
  name: 'FileCreatetagsInput',
  fields: () => ({
    set: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
  }),
})

export const DateTimeFieldUpdateOperationsInput = new GraphQLInputObjectType({
  name: 'DateTimeFieldUpdateOperationsInput',
  fields: () => ({
    set: { type: GraphQLDateTime },
  }),
})

export const FileUpdatetagsInput = new GraphQLInputObjectType({
  name: 'FileUpdatetagsInput',
  fields: () => ({
    set: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    push: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
  }),
})

export const FileCreateManytagsInput = new GraphQLInputObjectType({
  name: 'FileCreateManytagsInput',
  fields: () => ({
    set: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
  }),
})

export const AccountCreateNestedManyWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountCreateNestedManyWithoutOwnerInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountCreateWithoutOwnerInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountCreateOrConnectWithoutOwnerInput),
        ),
      },
      createMany: { type: AccountCreateManyOwnerInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
      },
    }),
  })

export const AccountUncheckedCreateNestedManyWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountUncheckedCreateNestedManyWithoutOwnerInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountCreateWithoutOwnerInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountCreateOrConnectWithoutOwnerInput),
        ),
      },
      createMany: { type: AccountCreateManyOwnerInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
      },
    }),
  })

export const NullableStringFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableStringFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLString },
    }),
  })

export const NullableDateTimeFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'NullableDateTimeFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLDateTime },
    }),
  })

export const AccountUpdateManyWithoutOwnerInput = new GraphQLInputObjectType({
  name: 'AccountUpdateManyWithoutOwnerInput',
  fields: () => ({
    create: {
      type: new GraphQLList(new GraphQLNonNull(AccountCreateWithoutOwnerInput)),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(AccountCreateOrConnectWithoutOwnerInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(AccountUpsertWithWhereUniqueWithoutOwnerInput),
      ),
    },
    createMany: { type: AccountCreateManyOwnerInputEnvelope },
    connect: {
      type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
    },
    set: { type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
    },
    delete: {
      type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
    },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(AccountUpdateWithWhereUniqueWithoutOwnerInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(AccountUpdateManyWithWhereWithoutOwnerInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(AccountScalarWhereInput)),
    },
  }),
})

export const AccountUncheckedUpdateManyWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountUncheckedUpdateManyWithoutOwnerInput',
    fields: () => ({
      create: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountCreateWithoutOwnerInput),
        ),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountCreateOrConnectWithoutOwnerInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountUpsertWithWhereUniqueWithoutOwnerInput),
        ),
      },
      createMany: { type: AccountCreateManyOwnerInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
      },
      set: {
        type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
      },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(AccountWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountUpdateWithWhereUniqueWithoutOwnerInput),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(AccountUpdateManyWithWhereWithoutOwnerInput),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(AccountScalarWhereInput)),
      },
    }),
  })

export const UserCreateNestedOneWithoutAccountsInput =
  new GraphQLInputObjectType({
    name: 'UserCreateNestedOneWithoutAccountsInput',
    fields: () => ({
      create: { type: UserUncheckedCreateWithoutAccountsInput },
      connectOrCreate: { type: UserCreateOrConnectWithoutAccountsInput },
      connect: { type: UserWhereUniqueInput },
    }),
  })

export const LogCreateNestedManyWithoutAccountInput =
  new GraphQLInputObjectType({
    name: 'LogCreateNestedManyWithoutAccountInput',
    fields: () => ({
      create: {
        type: new GraphQLList(new GraphQLNonNull(LogCreateWithoutAccountInput)),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(LogCreateOrConnectWithoutAccountInput),
        ),
      },
      createMany: { type: LogCreateManyAccountInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)),
      },
    }),
  })

export const LogUncheckedCreateNestedManyWithoutAccountInput =
  new GraphQLInputObjectType({
    name: 'LogUncheckedCreateNestedManyWithoutAccountInput',
    fields: () => ({
      create: {
        type: new GraphQLList(new GraphQLNonNull(LogCreateWithoutAccountInput)),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(LogCreateOrConnectWithoutAccountInput),
        ),
      },
      createMany: { type: LogCreateManyAccountInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)),
      },
    }),
  })

export const EnumAccountStatusFieldUpdateOperationsInput =
  new GraphQLInputObjectType({
    name: 'EnumAccountStatusFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: AccountStatus },
    }),
  })

export const UserUpdateOneRequiredWithoutAccountsInput =
  new GraphQLInputObjectType({
    name: 'UserUpdateOneRequiredWithoutAccountsInput',
    fields: () => ({
      create: { type: UserUncheckedCreateWithoutAccountsInput },
      connectOrCreate: { type: UserCreateOrConnectWithoutAccountsInput },
      upsert: { type: UserUpsertWithoutAccountsInput },
      connect: { type: UserWhereUniqueInput },
      update: { type: UserUncheckedUpdateWithoutAccountsInput },
    }),
  })

export const LogUpdateManyWithoutAccountInput = new GraphQLInputObjectType({
  name: 'LogUpdateManyWithoutAccountInput',
  fields: () => ({
    create: {
      type: new GraphQLList(new GraphQLNonNull(LogCreateWithoutAccountInput)),
    },
    connectOrCreate: {
      type: new GraphQLList(
        new GraphQLNonNull(LogCreateOrConnectWithoutAccountInput),
      ),
    },
    upsert: {
      type: new GraphQLList(
        new GraphQLNonNull(LogUpsertWithWhereUniqueWithoutAccountInput),
      ),
    },
    createMany: { type: LogCreateManyAccountInputEnvelope },
    connect: { type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)) },
    set: { type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)) },
    disconnect: {
      type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)),
    },
    delete: { type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)) },
    update: {
      type: new GraphQLList(
        new GraphQLNonNull(LogUpdateWithWhereUniqueWithoutAccountInput),
      ),
    },
    updateMany: {
      type: new GraphQLList(
        new GraphQLNonNull(LogUpdateManyWithWhereWithoutAccountInput),
      ),
    },
    deleteMany: {
      type: new GraphQLList(new GraphQLNonNull(LogScalarWhereInput)),
    },
  }),
})

export const LogUncheckedUpdateManyWithoutAccountInput =
  new GraphQLInputObjectType({
    name: 'LogUncheckedUpdateManyWithoutAccountInput',
    fields: () => ({
      create: {
        type: new GraphQLList(new GraphQLNonNull(LogCreateWithoutAccountInput)),
      },
      connectOrCreate: {
        type: new GraphQLList(
          new GraphQLNonNull(LogCreateOrConnectWithoutAccountInput),
        ),
      },
      upsert: {
        type: new GraphQLList(
          new GraphQLNonNull(LogUpsertWithWhereUniqueWithoutAccountInput),
        ),
      },
      createMany: { type: LogCreateManyAccountInputEnvelope },
      connect: {
        type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)),
      },
      set: { type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)) },
      disconnect: {
        type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)),
      },
      delete: {
        type: new GraphQLList(new GraphQLNonNull(LogWhereUniqueInput)),
      },
      update: {
        type: new GraphQLList(
          new GraphQLNonNull(LogUpdateWithWhereUniqueWithoutAccountInput),
        ),
      },
      updateMany: {
        type: new GraphQLList(
          new GraphQLNonNull(LogUpdateManyWithWhereWithoutAccountInput),
        ),
      },
      deleteMany: {
        type: new GraphQLList(new GraphQLNonNull(LogScalarWhereInput)),
      },
    }),
  })

export const AccountCreateNestedOneWithoutLogsInput =
  new GraphQLInputObjectType({
    name: 'AccountCreateNestedOneWithoutLogsInput',
    fields: () => ({
      create: { type: AccountUncheckedCreateWithoutLogsInput },
      connectOrCreate: { type: AccountCreateOrConnectWithoutLogsInput },
      connect: { type: AccountWhereUniqueInput },
    }),
  })

export const EnumLogTypeFieldUpdateOperationsInput = new GraphQLInputObjectType(
  {
    name: 'EnumLogTypeFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: LogType },
    }),
  },
)

export const AccountUpdateOneWithoutLogsInput = new GraphQLInputObjectType({
  name: 'AccountUpdateOneWithoutLogsInput',
  fields: () => ({
    create: { type: AccountUncheckedCreateWithoutLogsInput },
    connectOrCreate: { type: AccountCreateOrConnectWithoutLogsInput },
    upsert: { type: AccountUpsertWithoutLogsInput },
    connect: { type: AccountWhereUniqueInput },
    disconnect: { type: GraphQLBoolean },
    delete: { type: GraphQLBoolean },
    update: { type: AccountUncheckedUpdateWithoutLogsInput },
  }),
})

export const NullableIntFieldUpdateOperationsInput = new GraphQLInputObjectType(
  {
    name: 'NullableIntFieldUpdateOperationsInput',
    fields: () => ({
      set: { type: GraphQLInt },
      increment: { type: GraphQLInt },
      decrement: { type: GraphQLInt },
      multiply: { type: GraphQLInt },
      divide: { type: GraphQLInt },
    }),
  },
)

export const NestedIntFilter = new GraphQLInputObjectType({
  name: 'NestedIntFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntFilter },
  }),
})

export const NestedBoolFilter = new GraphQLInputObjectType({
  name: 'NestedBoolFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolFilter },
  }),
})

export const NestedEnumUserRoleFilter = new GraphQLInputObjectType({
  name: 'NestedEnumUserRoleFilter',
  fields: () => ({
    equals: { type: UserRole },
    in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
    not: { type: NestedEnumUserRoleFilter },
  }),
})

export const NestedEnumPermissionTypeFilter = new GraphQLInputObjectType({
  name: 'NestedEnumPermissionTypeFilter',
  fields: () => ({
    equals: { type: PermissionType },
    in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
    not: { type: NestedEnumPermissionTypeFilter },
  }),
})

export const NestedStringFilter = new GraphQLInputObjectType({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringFilter },
  }),
})

export const NestedIntWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedIntWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _avg: { type: NestedFloatFilter },
    avg: { type: NestedFloatFilter },
    _sum: { type: NestedIntFilter },
    sum: { type: NestedIntFilter },
    _min: { type: NestedIntFilter },
    min: { type: NestedIntFilter },
    _max: { type: NestedIntFilter },
    max: { type: NestedIntFilter },
  }),
})

export const NestedFloatFilter = new GraphQLInputObjectType({
  name: 'NestedFloatFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLFloat)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLFloat)) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatFilter },
  }),
})

export const NestedBoolWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedBoolWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLBoolean },
    not: { type: NestedBoolWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedBoolFilter },
    min: { type: NestedBoolFilter },
    _max: { type: NestedBoolFilter },
    max: { type: NestedBoolFilter },
  }),
})

export const NestedEnumUserRoleWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumUserRoleWithAggregatesFilter',
    fields: () => ({
      equals: { type: UserRole },
      in: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(UserRole)) },
      not: { type: NestedEnumUserRoleWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumUserRoleFilter },
      min: { type: NestedEnumUserRoleFilter },
      _max: { type: NestedEnumUserRoleFilter },
      max: { type: NestedEnumUserRoleFilter },
    }),
  })

export const NestedEnumPermissionTypeWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumPermissionTypeWithAggregatesFilter',
    fields: () => ({
      equals: { type: PermissionType },
      in: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(PermissionType)) },
      not: { type: NestedEnumPermissionTypeWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumPermissionTypeFilter },
      min: { type: NestedEnumPermissionTypeFilter },
      _max: { type: NestedEnumPermissionTypeFilter },
      max: { type: NestedEnumPermissionTypeFilter },
    }),
  })

export const NestedStringWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedStringWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLString)) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedStringFilter },
    min: { type: NestedStringFilter },
    _max: { type: NestedStringFilter },
    max: { type: NestedStringFilter },
  }),
})

export const NestedIntNullableFilter = new GraphQLInputObjectType({
  name: 'NestedIntNullableFilter',
  fields: () => ({
    equals: { type: GraphQLInt },
    in: { type: new GraphQLList(GraphQLInt) },
    notIn: { type: new GraphQLList(GraphQLInt) },
    lt: { type: GraphQLInt },
    lte: { type: GraphQLInt },
    gt: { type: GraphQLInt },
    gte: { type: GraphQLInt },
    not: { type: NestedIntNullableFilter },
  }),
})

export const NestedJsonNullableFilter = new GraphQLInputObjectType({
  name: 'NestedJsonNullableFilter',
  fields: () => ({
    equals: { type: GraphQLJSON },
    not: { type: GraphQLJSON },
  }),
})

export const NestedDateTimeFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeFilter },
  }),
})

export const NestedDateTimeWithAggregatesFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeWithAggregatesFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(GraphQLDateTime)) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeWithAggregatesFilter },
    _count: { type: NestedIntFilter },
    count: { type: NestedIntFilter },
    _min: { type: NestedDateTimeFilter },
    min: { type: NestedDateTimeFilter },
    _max: { type: NestedDateTimeFilter },
    max: { type: NestedDateTimeFilter },
  }),
})

export const NestedStringNullableFilter = new GraphQLInputObjectType({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    equals: { type: GraphQLString },
    in: { type: new GraphQLList(GraphQLString) },
    notIn: { type: new GraphQLList(GraphQLString) },
    lt: { type: GraphQLString },
    lte: { type: GraphQLString },
    gt: { type: GraphQLString },
    gte: { type: GraphQLString },
    contains: { type: GraphQLString },
    startsWith: { type: GraphQLString },
    endsWith: { type: GraphQLString },
    not: { type: NestedStringNullableFilter },
  }),
})

export const NestedDateTimeNullableFilter = new GraphQLInputObjectType({
  name: 'NestedDateTimeNullableFilter',
  fields: () => ({
    equals: { type: GraphQLDateTime },
    in: { type: new GraphQLList(GraphQLDateTime) },
    notIn: { type: new GraphQLList(GraphQLDateTime) },
    lt: { type: GraphQLDateTime },
    lte: { type: GraphQLDateTime },
    gt: { type: GraphQLDateTime },
    gte: { type: GraphQLDateTime },
    not: { type: NestedDateTimeNullableFilter },
  }),
})

export const NestedStringNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedStringNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLString },
      in: { type: new GraphQLList(GraphQLString) },
      notIn: { type: new GraphQLList(GraphQLString) },
      lt: { type: GraphQLString },
      lte: { type: GraphQLString },
      gt: { type: GraphQLString },
      gte: { type: GraphQLString },
      contains: { type: GraphQLString },
      startsWith: { type: GraphQLString },
      endsWith: { type: GraphQLString },
      not: { type: NestedStringNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      count: { type: NestedIntNullableFilter },
      _min: { type: NestedStringNullableFilter },
      min: { type: NestedStringNullableFilter },
      _max: { type: NestedStringNullableFilter },
      max: { type: NestedStringNullableFilter },
    }),
  })

export const NestedDateTimeNullableWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedDateTimeNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLDateTime },
      in: { type: new GraphQLList(GraphQLDateTime) },
      notIn: { type: new GraphQLList(GraphQLDateTime) },
      lt: { type: GraphQLDateTime },
      lte: { type: GraphQLDateTime },
      gt: { type: GraphQLDateTime },
      gte: { type: GraphQLDateTime },
      not: { type: NestedDateTimeNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      count: { type: NestedIntNullableFilter },
      _min: { type: NestedDateTimeNullableFilter },
      min: { type: NestedDateTimeNullableFilter },
      _max: { type: NestedDateTimeNullableFilter },
      max: { type: NestedDateTimeNullableFilter },
    }),
  })

export const NestedEnumAccountStatusFilter = new GraphQLInputObjectType({
  name: 'NestedEnumAccountStatusFilter',
  fields: () => ({
    equals: { type: AccountStatus },
    in: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
    not: { type: NestedEnumAccountStatusFilter },
  }),
})

export const NestedEnumAccountStatusWithAggregatesFilter =
  new GraphQLInputObjectType({
    name: 'NestedEnumAccountStatusWithAggregatesFilter',
    fields: () => ({
      equals: { type: AccountStatus },
      in: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(AccountStatus)) },
      not: { type: NestedEnumAccountStatusWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumAccountStatusFilter },
      min: { type: NestedEnumAccountStatusFilter },
      _max: { type: NestedEnumAccountStatusFilter },
      max: { type: NestedEnumAccountStatusFilter },
    }),
  })

export const NestedEnumLogTypeFilter = new GraphQLInputObjectType({
  name: 'NestedEnumLogTypeFilter',
  fields: () => ({
    equals: { type: LogType },
    in: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
    notIn: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
    not: { type: NestedEnumLogTypeFilter },
  }),
})

export const NestedIntNullableWithAggregatesFilter = new GraphQLInputObjectType(
  {
    name: 'NestedIntNullableWithAggregatesFilter',
    fields: () => ({
      equals: { type: GraphQLInt },
      in: { type: new GraphQLList(GraphQLInt) },
      notIn: { type: new GraphQLList(GraphQLInt) },
      lt: { type: GraphQLInt },
      lte: { type: GraphQLInt },
      gt: { type: GraphQLInt },
      gte: { type: GraphQLInt },
      not: { type: NestedIntNullableWithAggregatesFilter },
      _count: { type: NestedIntNullableFilter },
      count: { type: NestedIntNullableFilter },
      _avg: { type: NestedFloatNullableFilter },
      avg: { type: NestedFloatNullableFilter },
      _sum: { type: NestedIntNullableFilter },
      sum: { type: NestedIntNullableFilter },
      _min: { type: NestedIntNullableFilter },
      min: { type: NestedIntNullableFilter },
      _max: { type: NestedIntNullableFilter },
      max: { type: NestedIntNullableFilter },
    }),
  },
)

export const NestedFloatNullableFilter = new GraphQLInputObjectType({
  name: 'NestedFloatNullableFilter',
  fields: () => ({
    equals: { type: GraphQLFloat },
    in: { type: new GraphQLList(GraphQLFloat) },
    notIn: { type: new GraphQLList(GraphQLFloat) },
    lt: { type: GraphQLFloat },
    lte: { type: GraphQLFloat },
    gt: { type: GraphQLFloat },
    gte: { type: GraphQLFloat },
    not: { type: NestedFloatNullableFilter },
  }),
})

export const NestedEnumLogTypeWithAggregatesFilter = new GraphQLInputObjectType(
  {
    name: 'NestedEnumLogTypeWithAggregatesFilter',
    fields: () => ({
      equals: { type: LogType },
      in: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
      notIn: { type: new GraphQLList(new GraphQLNonNull(LogType)) },
      not: { type: NestedEnumLogTypeWithAggregatesFilter },
      _count: { type: NestedIntFilter },
      count: { type: NestedIntFilter },
      _min: { type: NestedEnumLogTypeFilter },
      min: { type: NestedEnumLogTypeFilter },
      _max: { type: NestedEnumLogTypeFilter },
      max: { type: NestedEnumLogTypeFilter },
    }),
  },
)

export const AccountCreateWithoutOwnerInput = new GraphQLInputObjectType({
  name: 'AccountCreateWithoutOwnerInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    pin: { type: new GraphQLNonNull(GraphQLInt) },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    logs: { type: LogCreateNestedManyWithoutAccountInput },
  }),
})

export const AccountUncheckedCreateWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountUncheckedCreateWithoutOwnerInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: new GraphQLNonNull(GraphQLString) },
      username: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      pin: { type: new GraphQLNonNull(GraphQLInt) },
      lastActivity: { type: GraphQLDateTime },
      status: { type: AccountStatus },
      statusDuration: { type: GraphQLInt },
      loginActivity: { type: AccountStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      logs: { type: LogUncheckedCreateNestedManyWithoutAccountInput },
    }),
  })

export const AccountCreateOrConnectWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountCreateOrConnectWithoutOwnerInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(AccountUncheckedCreateWithoutOwnerInput),
      },
    }),
  })

export const AccountCreateManyOwnerInputEnvelope = new GraphQLInputObjectType({
  name: 'AccountCreateManyOwnerInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(AccountCreateManyOwnerInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const AccountUpsertWithWhereUniqueWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountUpsertWithWhereUniqueWithoutOwnerInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(AccountUncheckedUpdateWithoutOwnerInput),
      },
      create: {
        type: new GraphQLNonNull(AccountUncheckedCreateWithoutOwnerInput),
      },
    }),
  })

export const AccountUpdateWithWhereUniqueWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountUpdateWithWhereUniqueWithoutOwnerInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
      data: {
        type: new GraphQLNonNull(AccountUncheckedUpdateWithoutOwnerInput),
      },
    }),
  })

export const AccountUpdateManyWithWhereWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountUpdateManyWithWhereWithoutOwnerInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(AccountScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(
          AccountUncheckedUpdateManyWithoutAccountsInput,
        ),
      },
    }),
  })

export const AccountScalarWhereInput = new GraphQLInputObjectType({
  name: 'AccountScalarWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(AccountScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(AccountScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(AccountScalarWhereInput)) },
    id: { type: IntFilter },
    ownerId: { type: IntFilter },
    name: { type: StringNullableFilter },
    email: { type: StringNullableFilter },
    phone: { type: StringFilter },
    username: { type: StringFilter },
    password: { type: StringFilter },
    pin: { type: IntFilter },
    lastActivity: { type: DateTimeFilter },
    status: { type: EnumAccountStatusFilter },
    statusDuration: { type: IntFilter },
    loginActivity: { type: EnumAccountStatusFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const UserCreateWithoutAccountsInput = new GraphQLInputObjectType({
  name: 'UserCreateWithoutAccountsInput',
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUncheckedCreateWithoutAccountsInput =
  new GraphQLInputObjectType({
    name: 'UserUncheckedCreateWithoutAccountsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      email: { type: new GraphQLNonNull(GraphQLString) },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      password: { type: new GraphQLNonNull(GraphQLString) },
      role: { type: UserRole },
      verificationToken: { type: GraphQLString },
      country: { type: GraphQLString },
      dateOfBirth: { type: GraphQLDateTime },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const UserCreateOrConnectWithoutAccountsInput =
  new GraphQLInputObjectType({
    name: 'UserCreateOrConnectWithoutAccountsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(UserWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(UserUncheckedCreateWithoutAccountsInput),
      },
    }),
  })

export const LogCreateWithoutAccountInput = new GraphQLInputObjectType({
  name: 'LogCreateWithoutAccountInput',
  fields: () => ({
    type: { type: LogType },
    message: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogUncheckedCreateWithoutAccountInput = new GraphQLInputObjectType(
  {
    name: 'LogUncheckedCreateWithoutAccountInput',
    fields: () => ({
      id: { type: GraphQLInt },
      type: { type: LogType },
      message: { type: new GraphQLNonNull(GraphQLString) },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  },
)

export const LogCreateOrConnectWithoutAccountInput = new GraphQLInputObjectType(
  {
    name: 'LogCreateOrConnectWithoutAccountInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(LogWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(LogUncheckedCreateWithoutAccountInput),
      },
    }),
  },
)

export const LogCreateManyAccountInputEnvelope = new GraphQLInputObjectType({
  name: 'LogCreateManyAccountInputEnvelope',
  fields: () => ({
    data: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(LogCreateManyAccountInput)),
      ),
    },
    skipDuplicates: { type: GraphQLBoolean },
  }),
})

export const UserUpsertWithoutAccountsInput = new GraphQLInputObjectType({
  name: 'UserUpsertWithoutAccountsInput',
  fields: () => ({
    update: {
      type: new GraphQLNonNull(UserUncheckedUpdateWithoutAccountsInput),
    },
    create: {
      type: new GraphQLNonNull(UserUncheckedCreateWithoutAccountsInput),
    },
  }),
})

export const UserUpdateWithoutAccountsInput = new GraphQLInputObjectType({
  name: 'UserUpdateWithoutAccountsInput',
  fields: () => ({
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: UserRole },
    verificationToken: { type: GraphQLString },
    country: { type: GraphQLString },
    dateOfBirth: { type: GraphQLDateTime },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const UserUncheckedUpdateWithoutAccountsInput =
  new GraphQLInputObjectType({
    name: 'UserUncheckedUpdateWithoutAccountsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      password: { type: GraphQLString },
      role: { type: UserRole },
      verificationToken: { type: GraphQLString },
      country: { type: GraphQLString },
      dateOfBirth: { type: GraphQLDateTime },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const LogUpsertWithWhereUniqueWithoutAccountInput =
  new GraphQLInputObjectType({
    name: 'LogUpsertWithWhereUniqueWithoutAccountInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(LogWhereUniqueInput) },
      update: {
        type: new GraphQLNonNull(LogUncheckedUpdateWithoutAccountInput),
      },
      create: {
        type: new GraphQLNonNull(LogUncheckedCreateWithoutAccountInput),
      },
    }),
  })

export const LogUpdateWithWhereUniqueWithoutAccountInput =
  new GraphQLInputObjectType({
    name: 'LogUpdateWithWhereUniqueWithoutAccountInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(LogWhereUniqueInput) },
      data: { type: new GraphQLNonNull(LogUncheckedUpdateWithoutAccountInput) },
    }),
  })

export const LogUpdateManyWithWhereWithoutAccountInput =
  new GraphQLInputObjectType({
    name: 'LogUpdateManyWithWhereWithoutAccountInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(LogScalarWhereInput) },
      data: {
        type: new GraphQLNonNull(LogUncheckedUpdateManyWithoutLogsInput),
      },
    }),
  })

export const LogScalarWhereInput = new GraphQLInputObjectType({
  name: 'LogScalarWhereInput',
  fields: () => ({
    AND: { type: new GraphQLList(new GraphQLNonNull(LogScalarWhereInput)) },
    OR: { type: new GraphQLList(new GraphQLNonNull(LogScalarWhereInput)) },
    NOT: { type: new GraphQLList(new GraphQLNonNull(LogScalarWhereInput)) },
    id: { type: IntFilter },
    accountId: { type: IntNullableFilter },
    type: { type: EnumLogTypeFilter },
    message: { type: StringFilter },
    createdAt: { type: DateTimeFilter },
    updatedAt: { type: DateTimeFilter },
  }),
})

export const AccountCreateWithoutLogsInput = new GraphQLInputObjectType({
  name: 'AccountCreateWithoutLogsInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    pin: { type: new GraphQLNonNull(GraphQLInt) },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    owner: {
      type: new GraphQLNonNull(UserCreateNestedOneWithoutAccountsInput),
    },
  }),
})

export const AccountUncheckedCreateWithoutLogsInput =
  new GraphQLInputObjectType({
    name: 'AccountUncheckedCreateWithoutLogsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      ownerId: { type: new GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: new GraphQLNonNull(GraphQLString) },
      username: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      pin: { type: new GraphQLNonNull(GraphQLInt) },
      lastActivity: { type: GraphQLDateTime },
      status: { type: AccountStatus },
      statusDuration: { type: GraphQLInt },
      loginActivity: { type: AccountStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const AccountCreateOrConnectWithoutLogsInput =
  new GraphQLInputObjectType({
    name: 'AccountCreateOrConnectWithoutLogsInput',
    fields: () => ({
      where: { type: new GraphQLNonNull(AccountWhereUniqueInput) },
      create: {
        type: new GraphQLNonNull(AccountUncheckedCreateWithoutLogsInput),
      },
    }),
  })

export const AccountUpsertWithoutLogsInput = new GraphQLInputObjectType({
  name: 'AccountUpsertWithoutLogsInput',
  fields: () => ({
    update: {
      type: new GraphQLNonNull(AccountUncheckedUpdateWithoutLogsInput),
    },
    create: {
      type: new GraphQLNonNull(AccountUncheckedCreateWithoutLogsInput),
    },
  }),
})

export const AccountUpdateWithoutLogsInput = new GraphQLInputObjectType({
  name: 'AccountUpdateWithoutLogsInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    pin: { type: GraphQLInt },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    owner: { type: UserUpdateOneRequiredWithoutAccountsInput },
  }),
})

export const AccountUncheckedUpdateWithoutLogsInput =
  new GraphQLInputObjectType({
    name: 'AccountUncheckedUpdateWithoutLogsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      ownerId: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      pin: { type: GraphQLInt },
      lastActivity: { type: GraphQLDateTime },
      status: { type: AccountStatus },
      statusDuration: { type: GraphQLInt },
      loginActivity: { type: AccountStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const AccountCreateManyOwnerInput = new GraphQLInputObjectType({
  name: 'AccountCreateManyOwnerInput',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    pin: { type: new GraphQLNonNull(GraphQLInt) },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const AccountUpdateWithoutOwnerInput = new GraphQLInputObjectType({
  name: 'AccountUpdateWithoutOwnerInput',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    pin: { type: GraphQLInt },
    lastActivity: { type: GraphQLDateTime },
    status: { type: AccountStatus },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: AccountStatus },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    logs: { type: LogUpdateManyWithoutAccountInput },
  }),
})

export const AccountUncheckedUpdateWithoutOwnerInput =
  new GraphQLInputObjectType({
    name: 'AccountUncheckedUpdateWithoutOwnerInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      pin: { type: GraphQLInt },
      lastActivity: { type: GraphQLDateTime },
      status: { type: AccountStatus },
      statusDuration: { type: GraphQLInt },
      loginActivity: { type: AccountStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
      logs: { type: LogUncheckedUpdateManyWithoutAccountInput },
    }),
  })

export const AccountUncheckedUpdateManyWithoutAccountsInput =
  new GraphQLInputObjectType({
    name: 'AccountUncheckedUpdateManyWithoutAccountsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      pin: { type: GraphQLInt },
      lastActivity: { type: GraphQLDateTime },
      status: { type: AccountStatus },
      statusDuration: { type: GraphQLInt },
      loginActivity: { type: AccountStatus },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })

export const LogCreateManyAccountInput = new GraphQLInputObjectType({
  name: 'LogCreateManyAccountInput',
  fields: () => ({
    id: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogUpdateWithoutAccountInput = new GraphQLInputObjectType({
  name: 'LogUpdateWithoutAccountInput',
  fields: () => ({
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogUncheckedUpdateWithoutAccountInput = new GraphQLInputObjectType(
  {
    name: 'LogUncheckedUpdateWithoutAccountInput',
    fields: () => ({
      id: { type: GraphQLInt },
      type: { type: LogType },
      message: { type: GraphQLString },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  },
)

export const LogUncheckedUpdateManyWithoutLogsInput =
  new GraphQLInputObjectType({
    name: 'LogUncheckedUpdateManyWithoutLogsInput',
    fields: () => ({
      id: { type: GraphQLInt },
      type: { type: LogType },
      message: { type: GraphQLString },
      createdAt: { type: GraphQLDateTime },
      updatedAt: { type: GraphQLDateTime },
    }),
  })
