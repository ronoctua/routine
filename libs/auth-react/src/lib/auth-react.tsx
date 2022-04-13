import { signOut as reactSignOut } from 'next-auth/react';

export const signOut = async () =>
  reactSignOut({ callbackUrl: '/api/auth/logout' });

export {
  SessionProvider as AuthProvider,
  useSession as useAuthSession,
  getSession,
  signIn,
} from 'next-auth/react';
