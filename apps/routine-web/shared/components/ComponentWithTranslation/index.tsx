import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import nextI18NextConfig from '../../../next-i18next.config';

const ComponentWithTranslation: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(ComponentWithTranslation, nextI18NextConfig);
