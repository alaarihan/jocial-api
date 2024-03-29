import {
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql'
import { GraphQLDateTime, GraphQLJSON } from 'graphql-scalars'
import { User, Log } from '../types'
import { AccountStatus, Day, LogScalarFieldEnum } from '../enums'
import {
  LogOrderByWithRelationInput,
  LogWhereInput,
  LogWhereUniqueInput,
} from '../inputs'

export const Account = new GraphQLObjectType({
  name: 'Account',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    ownerId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    pin: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    lastActivity: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    status: {
      type: new GraphQLNonNull(AccountStatus),
    },
    statusDuration: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    loginActivity: {
      type: new GraphQLNonNull(AccountStatus),
    },
    campaignStart: {
      type: Day,
    },
    Notes: {
      type: GraphQLString,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    owner: {
      type: new GraphQLNonNull(User),
    },
    logs: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Log))),
      args: {
        where: { type: LogWhereInput },
        orderBy: { type: LogOrderByWithRelationInput },
        cursor: { type: LogWhereUniqueInput },
        take: { type: GraphQLInt },
        skip: { type: GraphQLInt },
        distinct: {
          type: new GraphQLList(new GraphQLNonNull(LogScalarFieldEnum)),
        },
      },
    },
  }),
})

export const AggregateAccount = new GraphQLObjectType({
  name: 'AggregateAccount',
  fields: () => ({
    _count: { type: AccountCountAggregateOutputType },
    _avg: { type: AccountAvgAggregateOutputType },
    _sum: { type: AccountSumAggregateOutputType },
    _min: { type: AccountMinAggregateOutputType },
    _max: { type: AccountMaxAggregateOutputType },
  }),
})

export const AccountGroupByOutputType = new GraphQLObjectType({
  name: 'AccountGroupByOutputType',
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
    campaignStart: { type: Day },
    Notes: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    _count: { type: AccountCountAggregateOutputType },
    _avg: { type: AccountAvgAggregateOutputType },
    _sum: { type: AccountSumAggregateOutputType },
    _min: { type: AccountMinAggregateOutputType },
    _max: { type: AccountMaxAggregateOutputType },
  }),
})

export const AccountCountOutputType = new GraphQLObjectType({
  name: 'AccountCountOutputType',
  fields: () => ({
    logs: { type: GraphQLInt },
  }),
})

export const AccountCountAggregateOutputType = new GraphQLObjectType({
  name: 'AccountCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    ownerId: { type: GraphQLInt },
    name: { type: GraphQLInt },
    email: { type: GraphQLInt },
    phone: { type: GraphQLInt },
    username: { type: GraphQLInt },
    password: { type: GraphQLInt },
    pin: { type: GraphQLInt },
    lastActivity: { type: GraphQLInt },
    status: { type: GraphQLInt },
    statusDuration: { type: GraphQLInt },
    loginActivity: { type: GraphQLInt },
    campaignStart: { type: GraphQLInt },
    Notes: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const AccountAvgAggregateOutputType = new GraphQLObjectType({
  name: 'AccountAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    ownerId: { type: GraphQLFloat },
    pin: { type: GraphQLFloat },
    statusDuration: { type: GraphQLFloat },
  }),
})

export const AccountSumAggregateOutputType = new GraphQLObjectType({
  name: 'AccountSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    ownerId: { type: GraphQLInt },
    pin: { type: GraphQLInt },
    statusDuration: { type: GraphQLInt },
  }),
})

export const AccountMinAggregateOutputType = new GraphQLObjectType({
  name: 'AccountMinAggregateOutputType',
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
    campaignStart: { type: Day },
    Notes: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const AccountMaxAggregateOutputType = new GraphQLObjectType({
  name: 'AccountMaxAggregateOutputType',
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
    campaignStart: { type: Day },
    Notes: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
