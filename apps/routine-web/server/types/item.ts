import { objectType } from 'nexus';
import { Item } from 'nexus-prisma';

export const Type = objectType({
  name: Item.$name,
  definition(t) {
    t.field(Item.id);
    t.field(Item.owners);
    t.field(Item.label);
    t.field(Item.content);
    t.field(Item.contentType);
    t.field(Item.tags);
    t.field(Item.location);
    t.field(Item.latitude);
    t.field(Item.isPrivate);
    t.field(Item.isActive);
    t.field(Item.isTask);
    t.field(Item.isReminder);
    t.field(Item.isArchived);
    t.field(Item.isDone);
    t.field(Item.isAllDay);
    t.field(Item.actionOnDone);
    t.field(Item.priority);
    t.field(Item.recurrence);
    t.field(Item.status);
    t.field(Item.timeZone);
    t.field(Item.startDate);
    t.field(Item.endDate);
    t.field(Item.startTime);
    t.field(Item.endTime);
    t.field(Item.createdAt);
    t.field(Item.updatedAt);
  },
});
