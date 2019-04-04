import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
    type Query {
        hello: String!
        name: String!
    }
`;

const resolvers = {
    Query: {
        hello() {
            return 'This is the query!'
        },
        name() {
            return 'Nickkkkk'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})


server.start(() => {
    console.log('The server is up!');
  });
  