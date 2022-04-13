import { logout } from '@routine/auth-middleware';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  await logout(req, res);
}
