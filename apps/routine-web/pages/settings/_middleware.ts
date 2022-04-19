import { authMiddleware } from '@routine/auth-middleware';
import { GroupKeys } from '@routine/auth-middleware';

const { USER } = GroupKeys;

export default authMiddleware([USER]);
