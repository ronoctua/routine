import { withAuth } from 'next-auth/middleware';

export const authMiddleware = (targetGroups: string[]) =>
  withAuth({
    callbacks: {
      authorized: ({ token }) => {
        if (targetGroups.length === 1 && targetGroups[0] === 'PUBLIC') {
          return true;
        }

        if (!token) {
          return false;
        }

        const userGroups = token['groups'];

        if (!userGroups) {
          return false;
        }

        const groupsChecker = (
          userGroupsArray: string[],
          targetGroupsArray: string[],
        ) => {
          return targetGroupsArray.every((group: string) =>
            userGroupsArray.includes(group),
          );
        };

        const hasGroups = groupsChecker(userGroups, targetGroups);

        if (token && token['isEmailVerified'] && hasGroups) {
          return true;
        }

        return false;
      },
    },
  });
