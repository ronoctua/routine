import {
  extendType,
  nonNull,
  objectType,
  stringArg,
  floatArg,
  booleanArg,
} from 'nexus';

import { Groups } from '../../../shared/keys/groups';
import { Context } from '../../context';

export const UpdateItemChecklistMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('updateChecklistItem', {
      type: objectType({
        name: 'UpdateChecklistItemReturn',
        definition(t) {
          t.nonNull.string('category');
          t.nonNull.string('itemId');
          t.nonNull.float('itemOrder');
          t.field('item', {
            type: objectType({
              name: 'UpdateChecklistItemContentReturn',
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
        itemId: nonNull(stringArg()),
        itemOrder: nonNull(floatArg()),
        content: nonNull(stringArg()),
        isDone: nonNull(booleanArg()),
      },
      resolve: async (_parent, args, context: Context) => {
        if (
          !context.session ||
          !context.session.user ||
          context.session.user.isEmailVerified === false ||
          !context.session.user.groups.includes(Groups.CHECKLIST)
        ) {
          return null;
        }

        const { itemId, itemOrder, content, isDone } = args;

        if (!itemId || !itemOrder || !content || typeof isDone !== 'boolean') {
          throw new Error('Missing data.');
        }

        const newUserOnItem = await context.prisma.usersOnItems.update({
          where: { itemId_userId: { itemId, userId: context.session.user.id } },
          data: {
            itemOrder,
            item: {
              update: {
                content,
                isDone,
              },
            },
          },
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
        });

        return {
          category: newUserOnItem.category,
          itemId: newUserOnItem.itemId,
          itemOrder: newUserOnItem.itemOrder,
          item: {
            id: newUserOnItem.item.id,
            label: newUserOnItem.item.label,
            content: newUserOnItem.item.content,
            contentType: newUserOnItem.item.contentType,
            tags: newUserOnItem.item.tags,
            priority: newUserOnItem.item.priority,
            isDone: newUserOnItem.item.isDone,
            isArchived: newUserOnItem.item.isArchived,
          },
        };
      },
    });
  },
});
