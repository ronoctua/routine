import { authMiddleware } from '@routine/auth-middleware';
import { GroupKeys } from '@routine/auth-middleware';

const { USER, CHECKLIST } = GroupKeys;

export default authMiddleware([USER, CHECKLIST]);
