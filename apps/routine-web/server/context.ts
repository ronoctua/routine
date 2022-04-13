import { PrismaClient } from '@prisma/client';
import { Session } from '@routine/auth-api';
import { getSession } from '@routine/auth-react';

import prisma from '../shared/libs/prisma';

export type Context = {
  session: Session;
  prisma: PrismaClient;
};

export async function createContext({ req }): Promise<Context> {
  const session = await getSession({ req });

  return {
    session,
    prisma,
  };
}
