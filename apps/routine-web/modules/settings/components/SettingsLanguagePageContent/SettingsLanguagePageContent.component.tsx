import { useAuthSession } from '@routine/auth-react';
import { Surface } from '@routine/ui-react';
import { styled } from '@stitches/react';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Link } from '../../../../shared/components/Link';
import { DashboardLayout } from '../../../dashboard/components/DashboardLayout';
import { SettingsFooter } from '../SettingsFooter';
import { SettingsLanguagePageContentStyles } from './SettingsLanguagePageContent.styles';

const StyledSettingsPageContent = styled(
  'div',
  SettingsLanguagePageContentStyles,
);

export const SettingsLanguagePageContent = () => {
  const { data: session, status } = useAuthSession();
  const { t } = useTranslation('common');
  const router = useRouter();

  if (!session || !session.user || status !== 'authenticated') {
    return <DashboardLayout footerContent={<SettingsFooter />} />;
  }

  const handleLanguageChange = (targetLanguage) => {
    i18n.changeLanguage(targetLanguage);
    router.push('/settings', `/${targetLanguage}/settings`, {
      shallow: true,
      locale: targetLanguage,
    });
  };

  return (
    <DashboardLayout footerContent={<SettingsFooter />}>
      <StyledSettingsPageContent>
        <Surface>
          <h3>{t('language.language')}</h3>

          <Link
            href=''
            shallow
            locale='en'
            onClick={() => handleLanguageChange('en')}
            rightIndicator={i18n?.language === 'en'}>
            {t('language.en')}
          </Link>

          <Link
            href=''
            shallow
            locale='pt-BR'
            onClick={() => handleLanguageChange('pt-BR')}
            rightIndicator={i18n?.language === 'pt-BR'}>
            {t('language.pt-BR')}
          </Link>
        </Surface>
      </StyledSettingsPageContent>
    </DashboardLayout>
  );
};
