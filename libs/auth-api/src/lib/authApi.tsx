import NextAuth, { NextAuthOptions, ISODateString, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CognitoProvider from 'next-auth/providers/cognito';

export { Session } from 'next-auth';

interface TokenData {
  sub: string;
  iat: number;
  exp: number;
  jti: string;
  email: string;
  email_verified: boolean;
  'cognito:groups': string[];
}

declare module 'next-auth/jwt' {
  interface JWT {
    sub: string;
    iat: number;
    exp: number;
    jti: string;
    email: string;
    isEmailVerified: boolean;
    groups: string[];
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      image?: string | null;
      email: string;
      isEmailVerified: boolean;
      groups: string[];
    };
    expires: ISODateString;
  }
}

const cognitoClientId = process.env['COGNITO_CLIENT_ID'];
const cognitoClientSecret = process.env['COGNITO_CLIENT_SECRET'];
const cognitoIssuer = process.env['COGNITO_ISSUER'];

if (!cognitoClientId || !cognitoClientSecret || !cognitoIssuer) {
  throw new Error('Missing authentication environment variables.');
}

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: cognitoClientId,
      clientSecret: cognitoClientSecret,
      issuer: cognitoIssuer,
    }),
  ],
  callbacks: {
    jwt: async (token): Promise<JWT> => {
      if (token.profile) {
        const tokenData = (await Promise.resolve(
          token.profile,
        )) as unknown as TokenData;

        const groupsKey = 'cognito:groups';

        const sessionAuthData = {
          sub: tokenData.sub,
          iat: tokenData.iat,
          exp: tokenData.exp,
          jti: tokenData.jti,
          email: tokenData.email,
          isEmailVerified: tokenData.email_verified,
          groups: tokenData[groupsKey],
        };

        return sessionAuthData;
      } else {
        return Promise.resolve(token.token);
      }
    },

    session: async ({ session, token }): Promise<Session> => {
      if (session.user) {
        const sessionData = await Promise.resolve({
          ...session,
          user: {
            id: token.sub as string,
            email: session.user.email as string,
            isEmailVerified: token.isEmailVerified,
            groups: token.groups,
          },
        });

        return sessionData;
      }

      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
