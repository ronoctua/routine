import { GraphQLSchema } from 'graphql';
import { makeSchema } from 'nexus';
// eslint-disable-next-line import/no-unresolved
import NexusPrismaScalars from 'nexus-prisma/scalars';
import { join } from 'path';

import * as mutations from './mutations';
import * as queries from './queries';
import * as types from './types';

// To generate or update the `schema.graphql` file, it is necessary
// to access the below url when running the app:
// http://localhost:3007/api/graphql

export const schema = makeSchema({
  types: [NexusPrismaScalars, types, queries, mutations],
  outputs: {
    typegen: join(
      process.cwd(),
      'node_modules',
      '@types',
      'nexus-typegen',
      'index.d.ts',
    ),
    schema: join(
      process.cwd(),
      'apps',
      'routine-web',
      'server',
      'schema.graphql',
    ),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'apps', 'routine-web', 'server', 'context.ts'),
  },
}) as unknown as GraphQLSchema;
