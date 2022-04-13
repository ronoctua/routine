import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { SettingsPageContent } from '../../modules/settings/components/SettingsPageContent/index';
import nextI18nextConfig from '../../next-i18next.config';
import { withGraphQLGetServerProps } from '../../shared/libs/graphql/withGraphQLGetServerProps';
import { withGraphQLPage } from '../../shared/libs/graphql/withGraphQLPage';
import { userQuery } from '../../shared/queries/user.query';

export default withGraphQLPage({
  pageComponent: SettingsPageContent,
});

export const getServerSideProps = withGraphQLGetServerProps({
  queries: [userQuery],
  getServerSideProps: async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(
          locale,
          ['common'],
          nextI18nextConfig,
        )),
      },
    };
  },
});
