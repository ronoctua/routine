import { PrismaClient } from '@prisma/client';

// Best practice for instantiating PrismaClient with Next.js
// Prevent multiple instances of Prisma Client
// Reference: https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices

declare global {
  // globalThis does not support `let` or `const`
  // eslint-disable-next-line vars-on-top,  no-var
  var prisma: PrismaClient;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
