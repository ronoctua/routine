import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import { createContext } from './context';
import { schema } from './schema';

const cors = Cors();

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      settings: {
        'request.credentials': 'include',
      },
    }),
  ],
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
