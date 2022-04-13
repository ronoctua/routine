import { objectType } from 'nexus';
import { LastConnections } from 'nexus-prisma';

export const LastConnectionsType = objectType({
  name: LastConnections.$name,
  definition(t) {
    t.field(LastConnections.ipAddress);
    t.field(LastConnections.owner);
    t.field(LastConnections.ownerId);
    t.field(LastConnections.token);
    t.field(LastConnections.userAgent);
    t.field(LastConnections.country);
    t.field(LastConnections.city);
    t.field(LastConnections.region);
    t.field(LastConnections.latitude);
    t.field(LastConnections.longitude);
    t.field(LastConnections.createdAt);
    t.field(LastConnections.updatedAt);
  },
});
