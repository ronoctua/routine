import { GroupKeys } from '@routine/auth-middleware';
import { nanoid } from 'nanoid';
import { extendType, nonNull, objectType, stringArg, floatArg } from 'nexus';

import { Context } from '../../context';

export const CreateItemChecklistMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createChecklistItem', {
      type: objectType({
        name: 'CreateChecklistItemReturn',
        definition(t) {
          t.nonNull.string('category');
          t.nonNull.string('itemId');
          t.nonNull.float('itemOrder');
          t.field('item', {
            type: objectType({
              name: 'CreateChecklistItemContentReturn',
              definition(t) {
                t.nonNull.string('id');
                t.nonNull.string('label');
                t.nonNull.string('content');
                t.nonNull.string('contentType');
                t.list.string('tags');
                t.nullable.int('priority');
                t.nonNull.boolean('isDone');
                t.nonNull.boolean('isArchived');
              },
            }),
          });
        },
      }),
      args: {
        content: nonNull(stringArg()),
        itemOrder: nonNull(floatArg()),
      },
      resolve: async (_parent, args, context: Context) => {
        if (
          !context.session ||
          !context.session.user ||
          context.session.user.isEmailVerified === false ||
          !context.session.user.groups.includes(GroupKeys.CHECKLIST)
        ) {
          return null;
        }

        const { content, itemOrder } = args;

        if (!content || !itemOrder) {
          throw new Error('Missing data.');
        }

        const itemId = nanoid();

        const newItem = await context.prisma.item.create({
          data: {
            id: itemId,
            label: 'Item label',
            content,
            tags: ['checklist'],
            actionOnDone: 'default',
            contentType: 'text',
            priority: 5,
          },
        });

        const newUserOnItem = await context.prisma.usersOnItems.create({
          data: {
            userId: context.session.user.id,
            itemId: itemId,
            itemOrder: itemOrder,
            category: 'checklist',
          },
        });

        return {
          category: newUserOnItem.category,
          itemId: newUserOnItem.itemId,
          itemOrder: newUserOnItem.itemOrder,
          item: {
            id: newItem.id,
            label: newItem.label,
            content: newItem.content,
            contentType: newItem.contentType,
            tags: newItem.tags,
            priority: newItem.priority,
            isDone: newItem.isDone,
            isArchived: newItem.isArchived,
          },
        };
      },
    });
  },
});
