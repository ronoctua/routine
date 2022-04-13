import { objectType } from 'nexus';
import { Connections } from 'nexus-prisma';

export const ConnectionsType = objectType({
  name: Connections.$name,
  definition(t) {
    t.field(Connections.ipAddress);
    t.field(Connections.owner);
    t.field(Connections.ownerId);
    t.field(Connections.token);
    t.field(Connections.userAgent);
    t.field(Connections.country);
    t.field(Connections.city);
    t.field(Connections.region);
    t.field(Connections.latitude);
    t.field(Connections.longitude);
    t.field(Connections.createdAt);
    t.field(Connections.updatedAt);
  },
});
