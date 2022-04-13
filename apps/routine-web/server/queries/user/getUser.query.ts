import { extendType, objectType } from 'nexus';

import { Groups } from '../../../shared/keys/groups';
import { Context } from '../../context';

export const GetUserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      description: 'Get data from the current logged user.',
      type: objectType({
        name: 'UserReturn',
        definition(t) {
          t.nonNull.string('nickname');
          t.nonNull.list.string('groups');
          t.list.field('items', {
            type: objectType({
              name: 'UserItemsReturn',
              definition(t) {
                t.nonNull.string('category');
                t.nonNull.string('itemId');
                t.nonNull.float('itemOrder');
                t.nonNull.field('item', {
                  type: objectType({
                    name: 'UserItemContentReturn',
                    definition(t) {
                      t.nonNull.string('id');
                      t.nonNull.string('label');
                      t.nonNull.string('content');
                      t.nonNull.string('contentType');
                      t.list.string('tags');
                      t.nonNull.boolean('isDone');
                      t.nonNull.boolean('isArchived');
                      t.nullable.int('priority');
                    },
                  }),
                });
              },
            }),
          });
        },
      }),
      resolve: async (_parent, _args, context: Context) => {
        if (
          !context.session ||
          !context.session.user ||
          context.session.user.isEmailVerified === false ||
          !context.session.user.groups.includes(Groups.CHECKLIST)
        ) {
          return null;
        }

        const userData = await context.prisma.user.findUnique({
          where: {
            id: context.session.user.id,
          },
          select: {
            nickname: true,
            groups: true,
            items: {
              select: {
                category: true,
                itemId: true,
                itemOrder: true,
                item: {
                  select: {
                    id: true,
                    label: true,
                    content: true,
                    contentType: true,
                    tags: true,
                    priority: true,
                    isDone: true,
                    isArchived: true,
                  },
                },
              },
            },
          },
        });

        return userData;
      },
    });
  },
});
