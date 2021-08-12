const { default: gql } = require('graphql-tag')

const Registor = gql`
  type Registor {
    id: String!
    keys: [String!]!
    createdAt: DateTime!
  }

  type Query {
    findOneRegistor(where: RegistorWhereUniqueInput!): Registor
    findFirstRegistor(
      where: RegistorWhereInput
      orderBy: [RegistorOrderByInput!]
      cursor: RegistorWhereUniqueInput
      distinct: RegistorDistinctFieldEnum
      skip: Int
      take: Int
    ): [Registor!]
    findManyRegistor(
      where: RegistorWhereInput
      orderBy: [RegistorOrderByInput!]
      cursor: RegistorWhereUniqueInput
      distinct: RegistorDistinctFieldEnum
      skip: Int
      take: Int
    ): [Registor!]
    findManyRegistorCount(
      where: RegistorWhereInput
      orderBy: [RegistorOrderByInput!]
      cursor: RegistorWhereUniqueInput
      distinct: RegistorDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateRegistor(
      where: RegistorWhereInput
      orderBy: [RegistorOrderByInput!]
      cursor: RegistorWhereUniqueInput
      distinct: RegistorDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateRegistor
  }
  type Mutation {
    createOneRegistor(data: RegistorCreateInput!): Registor!
    updateOneRegistor(
      where: RegistorWhereUniqueInput!
      data: RegistorUpdateInput!
    ): Registor!
    deleteOneRegistor(where: RegistorWhereUniqueInput!): Registor
    upsertOneRegistor(
      where: RegistorWhereUniqueInput!
      create: RegistorCreateInput!
      update: RegistorUpdateInput!
    ): Registor
    deleteManyRegistor(where: RegistorWhereInput): BatchPayload
    updateManyRegistor(
      where: RegistorWhereInput
      data: RegistorUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Registor,
}
