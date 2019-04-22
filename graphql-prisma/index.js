import { GraphQLServer, PubSub } from 'graphql-yoga';
import Query from './resolvers/Query';
import prisma from './prisma';

const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs: './prisma/datamodel.prisma',
    resolvers: {
      Query
    },
    context: {
      db,
      pubsub,
      prisma
    }
  });
  
  server.start(() => {
    console.log('The server is up!');
  });
  