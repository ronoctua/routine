import { authMiddleware } from '@routine/auth-middleware';

import { Groups } from '../../shared/keys/groups';

const { USER } = Groups;

export default authMiddleware([USER]);
