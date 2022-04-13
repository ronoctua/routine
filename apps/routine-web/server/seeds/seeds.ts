import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

import { Groups } from '../../shared/keys/groups';

const prisma = new PrismaClient();

const userId = process.env.SEED_USER_ID.toString() || nanoid(36);
const userAuthId =
  process.env.SEED_USER_AUTH_ID.toString() ||
  'aaa111aa-bbb2-ccc3-ddd4-eee555eee555';

const itemOneId = nanoid();
const itemTwoId = nanoid();
const itemThreeId = nanoid();
const itemFourId = nanoid();

const { ADMIN, CHECKLIST, DEVELOPER, EXPERIMENTAL, MAINTAINER, USER } = Groups;

const seed = async () => {
  await prisma.user.create({
    data: {
      id: userId,
      authId: userAuthId,
      nickname: 'user-test',
      email: 'email@email.com',
      password: '1234',
      groups: [ADMIN, CHECKLIST, DEVELOPER, EXPERIMENTAL, MAINTAINER, USER],
    },
  });

  await prisma.item.createMany({
    data: [
      {
        id: itemOneId,
        label: 'Test 1 label',
        content: 'Test 1 content',
        contentType: 'text',
        actionOnDone: 'default',
        priority: 5,
      },
      {
        id: itemTwoId,
        label: 'Test 2 label',
        content: 'Test 2 content',
        contentType: 'text',
        actionOnDone: 'default',
        priority: 10,
      },
      {
        id: itemThreeId,
        label: 'Test 3 label',
        content: 'Test 3 content',
        contentType: 'text',
        actionOnDone: 'default',
        priority: 5,
      },
      {
        id: itemFourId,
        label: 'Test 4 label',
        content: 'Test 4 content',
        contentType: 'text',
        actionOnDone: 'default',
        priority: 2,
      },
    ],
  });

  await prisma.usersOnItems.createMany({
    data: [
      {
        userId: userId,
        itemId: itemOneId,
        itemOrder: 300003,
        category: 'checklist',
      },
      {
        userId: userId,
        itemId: itemTwoId,
        itemOrder: 400004,
        category: 'checklist',
      },
      {
        userId: userId,
        itemId: itemThreeId,
        itemOrder: 100001,
        category: 'checklist',
      },
      {
        userId: userId,
        itemId: itemFourId,
        itemOrder: 200002,
        category: 'checklist',
      },
    ],
  });
};

seed()
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
