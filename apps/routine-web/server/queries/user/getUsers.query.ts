import { extendType, objectType } from 'nexus';
import { typeCheck } from 'type-check';

import { Context } from '../../context';

export const GetUsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      description: 'List all users.',
      type: objectType({
        name: 'UsersReturn',
        definition(t) {
          t.nonNull.string('nickname');
          t.nonNull.list.string('groups');
        },
      }),
      resolve: async (_parent, _args, context: Context) => {
        if (
          !context.session ||
          !context.session.user ||
          context.session.user.isEmailVerified === false
        ) {
          return null;
        }

        const usersSharedData = await context.prisma.user.findMany({
          select: {
            nickname: true,
            groups: true,
          },
        });

        const strictTypeCheck = typeCheck(
          '[{nickname: String, groups: [String]}]',
          usersSharedData,
        );

        if (strictTypeCheck) {
          return usersSharedData;
        }

        return null;
      },
    });
  },
});
