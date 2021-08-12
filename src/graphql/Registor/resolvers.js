const Registor = {
  Query: {
    findOneRegistor: (_parent, args, { prisma }) => {
      return prisma.registor.findOne(args)
    },
    findFirstRegistor: (_parent, args, { prisma }) => {
      return prisma.registor.findFirst(args)
    },
    findManyRegistor: (_parent, args, { prisma }) => {
      return prisma.registor.findMany(args)
    },
    findManyRegistorCount: (_parent, args, { prisma }) => {
      return prisma.registor.count(args)
    },
    aggregateRegistor: (_parent, args, { prisma }) => {
      return prisma.registor.aggregate(args)
    },
  },
  Mutation: {
    createOneRegistor: (_parent, args, { prisma }) => {
      return prisma.registor.create(args)
    },
    updateOneRegistor: (_parent, args, { prisma }) => {
      return prisma.registor.update(args)
    },
    deleteOneRegistor: async (_parent, args, { prisma }) => {
      return prisma.registor.delete(args)
    },
    upsertOneRegistor: async (_parent, args, { prisma }) => {
      return prisma.registor.upsert(args)
    },
    deleteManyRegistor: async (_parent, args, { prisma }) => {
      return prisma.registor.deleteMany(args)
    },
    updateManyRegistor: (_parent, args, { prisma }) => {
      return prisma.registor.updateMany(args)
    },
  },
}

module.exports = {
  Registor,
}
