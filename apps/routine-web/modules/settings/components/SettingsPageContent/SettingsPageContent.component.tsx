import { useAuthSession, signOut } from '@routine/auth-react';
import { SOLGear } from '@routine/ui-icons';
import { Button, Label, Surface, Switch, useTheme } from '@routine/ui-react';
import { themes } from '@routine/ui-web';
import { styled } from '@stitches/react';
import { i18n, useTranslation } from 'next-i18next';

import { Link } from '../../../../shared/components/Link';
import { DashboardLayout } from '../../../dashboard/components/DashboardLayout';
import { SettingsFooter } from '../SettingsFooter';
import { SettingsPageContentStyles } from './SettingsPageContent.styles';

const StyledSettingsPageContent = styled('div', SettingsPageContentStyles);

export const SettingsPageContent = () => {
  const { data: session, status } = useAuthSession();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation('common');

  if (!theme || !session || !session.user || status !== 'authenticated') {
    return <DashboardLayout footerContent={<SettingsFooter />} />;
  }

  // TODO: Store settings in the database
  // if (!userData.data || !userData.data.user) {
  //   return (
  //     <Surface status="negative" className={delayEffect()}>
  //       <p>NO USER DATA IN THE DATABASE!</p>
  //     </Surface>
  //   );
  // }

  return (
    <DashboardLayout footerContent={<SettingsFooter />}>
      <StyledSettingsPageContent>
        <span>
          <h3>{t('session.settings').toUpperCase()}</h3>
        </span>

        <Surface>
          <span>
            <strong data-class='label'>{t('nickname')}: </strong> user-nickname
          </span>

          <span>
            <strong data-class='label'>{t('email')}: </strong>{' '}
            {session.user.email}{' '}
            {session.user.isEmailVerified ? (
              <span style={{ color: 'var(--colors-positive-up)' }}>
                ← <strong>{t('verified').toLowerCase()}</strong>
              </span>
            ) : (
              <span style={{ color: 'var(--colors-negative-up)' }}>
                ← <strong>{t('unverified').toLowerCase()}</strong>
              </span>
            )}
          </span>

          <span>
            <strong data-class='label'>{t('language.language')}: </strong>{' '}
            {i18n?.language === 'en' && t('language.en')}
            {i18n?.language === 'pt-BR' && t('language.pt-BR')}{' '}
            {i18n?.language && (
              <Link
                href='/settings/language'
                variant='link'
                leftIcon={<SOLGear />}
              />
            )}
          </span>
        </Surface>

        <Surface>
          <h3>{t('session.checklist')}</h3>

          <Label horizontal>
            <Switch checked={false} />
            Lorem ipsum 1
          </Label>

          <Label horizontal>
            <Switch checked={true} />
            Lorem ipsum 2
          </Label>

          <Label horizontal>
            <Switch checked={false} />
            Lorem ipsum 3
          </Label>
        </Surface>

        <Surface>
          <h3>{t('theme.theme')}</h3>

          <Button
            variant='link'
            rightIndicator={theme === themes.woodTheme.className}
            onClick={() => setTheme(themes.woodTheme.className)}>
            {t('theme.wood')}
          </Button>

          <Button
            variant='link'
            rightIndicator={theme === themes.futurismTheme.className}
            onClick={() => setTheme(themes.futurismTheme.className)}>
            {t('theme.futurism')}
          </Button>

          <Button
            variant='link'
            rightIndicator={theme === themes.reptilianTheme.className}
            onClick={() => setTheme(themes.reptilianTheme.className)}>
            {t('theme.reptilian')}
          </Button>
        </Surface>

        <Surface>
          <Button onClick={signOut}>{t('logout')}</Button>
        </Surface>
      </StyledSettingsPageContent>
    </DashboardLayout>
  );
};
