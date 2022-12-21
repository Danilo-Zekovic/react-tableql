import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from 'mongoose'

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// connect to the DB before running the server
mongoose
  .connect(DATABASE_URL, { dbName: 'react-tableql', appName: 'react-tableql' })
  .then(() => {
    console.log('MongoDB connection successful.')

    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    return startStandaloneServer(server, {
      listen: { port: 8080 },
    })
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`)
  })
