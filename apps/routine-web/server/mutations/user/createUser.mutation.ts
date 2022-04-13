import { extendType, list, nonNull, objectType, stringArg } from 'nexus';

import { Context } from '../../context';

export const CreateUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: objectType({
        name: 'CreateUserReturn',
        definition(t) {
          t.nonNull.string('id');
          t.nonNull.string('authId');
          t.nonNull.string('nickname');
          t.nonNull.string('email');
          t.nonNull.list.field('groups', { type: nonNull('Group') });
        },
      }),
      args: {
        id: nonNull(stringArg()),
        authId: nonNull(stringArg()),
        nickname: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        groups: nonNull(list(nonNull('Group'))),
      },
      resolve: async (_parent, args, context: Context) => {
        //
        // TODO: Create the "CreateUserMutation" rules!!
        //

        const { id, authId, email, groups, nickname, password } = args;

        if (!id || !email || !groups || !groups[0] || !nickname || !password) {
          throw new Error('Missing data.');
        }

        const newUser = await context.prisma.user.create({
          data: {
            id,
            authId,
            nickname,
            email,
            password,
            groups,
          },
        });

        return {
          id: newUser.id,
          authId: newUser.authId,
          nickname: newUser.nickname,
          email: newUser.email,
          groups: newUser.groups,
        };
      },
    });
  },
});
