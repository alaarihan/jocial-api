import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql'

export const AffectedRowsOutput = new GraphQLObjectType({
  name: 'AffectedRowsOutput',
  fields: () => ({
    count: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
export * from './Permission/type'
export * from './File/type'
export * from './User/type'
export * from './Account/type'
export * from './Log/type'
