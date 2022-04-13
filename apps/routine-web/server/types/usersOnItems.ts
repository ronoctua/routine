import { objectType } from 'nexus';
import { UsersOnItems } from 'nexus-prisma';

export const UsersOnItemsType = objectType({
  name: UsersOnItems.$name,
  definition(t) {
    t.field(UsersOnItems.item);
    t.field(UsersOnItems.itemId);
    t.field(UsersOnItems.user);
    t.field(UsersOnItems.userId);
    t.field(UsersOnItems.category);
    t.field(UsersOnItems.itemOrder);
    t.field(UsersOnItems.notificationDate);
    t.field(UsersOnItems.assignedAt);
  },
});
