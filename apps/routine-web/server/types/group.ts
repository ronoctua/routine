import { enumType, nonNull } from 'nexus';
import { Group } from 'nexus-prisma';

export const GroupEnumType = nonNull(enumType(Group));
