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
import { Account } from '../types'
import { LogType } from '../enums'

export const Log = new GraphQLObjectType({
  name: 'Log',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    accountId: {
      type: GraphQLInt,
    },
    type: {
      type: new GraphQLNonNull(LogType),
    },
    message: {
      type: new GraphQLNonNull(GraphQLString),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    account: {
      type: Account,
    },
  }),
})

export const AggregateLog = new GraphQLObjectType({
  name: 'AggregateLog',
  fields: () => ({
    _count: { type: LogCountAggregateOutputType },
    count: { type: LogCountAggregateOutputType },
    _avg: { type: LogAvgAggregateOutputType },
    avg: { type: LogAvgAggregateOutputType },
    _sum: { type: LogSumAggregateOutputType },
    sum: { type: LogSumAggregateOutputType },
    _min: { type: LogMinAggregateOutputType },
    min: { type: LogMinAggregateOutputType },
    _max: { type: LogMaxAggregateOutputType },
    max: { type: LogMaxAggregateOutputType },
  }),
})

export const LogGroupByOutputType = new GraphQLObjectType({
  name: 'LogGroupByOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    _count: { type: LogCountAggregateOutputType },
    _avg: { type: LogAvgAggregateOutputType },
    _sum: { type: LogSumAggregateOutputType },
    _min: { type: LogMinAggregateOutputType },
    _max: { type: LogMaxAggregateOutputType },
  }),
})

export const LogCountAggregateOutputType = new GraphQLObjectType({
  name: 'LogCountAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: GraphQLInt },
    message: { type: GraphQLInt },
    createdAt: { type: GraphQLInt },
    updatedAt: { type: GraphQLInt },
    _all: { type: GraphQLInt },
  }),
})

export const LogAvgAggregateOutputType = new GraphQLObjectType({
  name: 'LogAvgAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLFloat },
    accountId: { type: GraphQLFloat },
  }),
})

export const LogSumAggregateOutputType = new GraphQLObjectType({
  name: 'LogSumAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
  }),
})

export const LogMinAggregateOutputType = new GraphQLObjectType({
  name: 'LogMinAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})

export const LogMaxAggregateOutputType = new GraphQLObjectType({
  name: 'LogMaxAggregateOutputType',
  fields: () => ({
    id: { type: GraphQLInt },
    accountId: { type: GraphQLInt },
    type: { type: LogType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
  }),
})
