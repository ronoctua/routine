import { objectType, nonNull } from 'nexus';
import { User } from 'nexus-prisma';

export const UserType = objectType({
  name: User.$name,
  definition(t) {
    t.field(User.id);
    t.field(User.email);
    t.field(User.nickname);
    t.nonNull.list.field('groups', { type: nonNull('Group') });
    t.field(User.items);
    t.field(User.scores);
    t.field(User.connections);
    t.field(User.lastConnections);
  },
});
