const { Registor } = require('./Registor/resolvers')
const { User } = require('./User/resolvers')

const resolvers = [User, Registor]

module.exports = { resolvers }
