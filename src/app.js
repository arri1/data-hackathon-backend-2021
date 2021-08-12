const {PrismaClient} = require('@prisma/client')
const {GraphQLServer} = require('graphql-yoga')
const {PrismaSelect} = require('@paljs/plugins')
const {typeDefs} = require('./graphql/typeDefs')
const {resolvers} = require('./graphql/resolvers')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const prisma = new PrismaClient()

const middleware = async (resolve, root, args, context, info) => {
    const result = new PrismaSelect(info).value
    if (Object.keys(result.select).length > 0) {
        args = {
            ...args,
            ...result
        }
    }
    return resolve(root, args, context, info)
}
const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: (req) => {
        const {authorization} = req.request.headers
        return {
            prisma
        }
    },
    introspection: true,
    playground: true,
    middlewares: [middleware]
})
const PORT = process.env.PORT || process.env.SERVER_PORT

server.start({port: PORT}, async () => {
    const admin =  await  prisma.user.findOne({where:{
        login:'admin'
        }})
    if (!admin){
        const password = await bcrypt.hash('admin', 10)
        await prisma.user.create({
            data: {
                login: 'admin',
                password
            }
        })
    }
    console.log(`Server is running on localhost:${PORT}`)
})

