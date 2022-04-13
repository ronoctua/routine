import { useAuthSession, signIn, signOut } from '@routine/auth-react';
import { appearEffect, delayEffect } from '@routine/ui-effects';
import { Button, Surface } from '@routine/ui-react';
import { styled } from '@stitches/react';
import { useTranslation } from 'next-i18next';

import { Link } from '../../../../shared/components/Link';
import { HomePageContentStyles } from './HomePageContent.styles';

const StyledHomePageContent = styled('div', HomePageContentStyles);

export const HomePageContent = () => {
  const { data: session, status } = useAuthSession();
  const { t } = useTranslation('common');

  const loginContent = (
    <Surface>
      <h1>LOGIN</h1>

      <Button onClick={() => signIn()}>Sign in</Button>
    </Surface>
  );

  if (!session || !session.user || status === 'unauthenticated') {
    return (
      <StyledHomePageContent className={appearEffect()}>
        {loginContent}
      </StyledHomePageContent>
    );
  }

  if (
    (session && session.user && !session.user.email) ||
    (session && !session.user)
  ) {
    signOut();

    return (
      <StyledHomePageContent className={delayEffect()}>
        {loginContent}
      </StyledHomePageContent>
    );
  }

  if (
    session &&
    session.user &&
    session.user.email &&
    status === 'authenticated' &&
    session.user.isEmailVerified === false
  ) {
    return (
      <StyledHomePageContent className={appearEffect()}>
        <Surface>
          <h1>EMAIL NOT VERIFIED</h1>

          <p>Email: {session.user.email}</p>

          <p>
            Please verify your email address by clicking the link sent to you.
          </p>
        </Surface>

        <Surface>
          <Button onClick={() => signOut()}>Sign out</Button>
        </Surface>
      </StyledHomePageContent>
    );
  }

  // TODO: Check if the logged in user has a profile in the database
  // if (!userData.data || !userData.data.user) {
  //   return (
  //     <Surface status="negative" className={delayEffect()}>
  //       <p>NO USER DATA IN THE DATABASE!</p>
  //     </Surface>
  //   );
  // }

  if (
    session &&
    session.user &&
    session.user.email &&
    status === 'authenticated' &&
    session.user.isEmailVerified === true
  ) {
    return (
      <StyledHomePageContent className={appearEffect()}>
        <Surface>
          <h1>LOGGED</h1>
        </Surface>

        <Surface>
          <Link status="secondary" href="/settings">
            <h3>@user-nickname</h3>
          </Link>

          <Link href="/metrics">{t('session.metrics')}</Link>
          <Link href="/health">{t('session.sports')}</Link>
          <Link href="/notes">{t('session.notes')}</Link>
          <Link href="/checklist">{t('session.checklist')}</Link>
        </Surface>

        <Surface>
          <Button onClick={() => signOut()}>Sign out</Button>
        </Surface>
      </StyledHomePageContent>
    );
  }

  if (status === 'loading') {
    return (
      <StyledHomePageContent className={delayEffect()}>
        Loading...
      </StyledHomePageContent>
    );
  }

  return (
    <StyledHomePageContent className={appearEffect()}>
      {loginContent}
    </StyledHomePageContent>
  );
};
