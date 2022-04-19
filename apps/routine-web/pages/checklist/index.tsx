import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ChecklistPageContent } from '../../modules/checklist/components/ChecklistPageContent/index';
import nextI18nextConfig from '../../next-i18next.config';
import { TranslationNamespacesKeys } from '../../shared/keys/TranslationNamespacesKeys';
import { withGraphQLGetServerProps } from '../../shared/libs/graphql/withGraphQLGetServerProps';
import { withGraphQLPage } from '../../shared/libs/graphql/withGraphQLPage';
import { userQuery } from '../../shared/queries/user.query';

export default withGraphQLPage({
  pageComponent: ChecklistPageContent,
});

export const getServerSideProps = withGraphQLGetServerProps({
  queries: [userQuery],
  getServerSideProps: async ({ locale }) => {
    const { COMMON } = TranslationNamespacesKeys;

    return {
      props: {
        ...(await serverSideTranslations(locale, [COMMON], nextI18nextConfig)),
      },
    };
  },
});
