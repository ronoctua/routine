import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HomePageContent } from '../../modules/home/components/HomePageContent/index';
import nextI18nextConfig from '../../next-i18next.config';
import { withGraphQLGetServerProps } from '../../shared/libs/graphql/withGraphQLGetServerProps';
import { withGraphQLPage } from '../../shared/libs/graphql/withGraphQLPage';
import { userQuery } from '../../shared/queries/user.query';

export default withGraphQLPage({
  pageComponent: HomePageContent,
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
