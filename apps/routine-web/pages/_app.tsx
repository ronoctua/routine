import { AuthProvider } from '@routine/auth-react';
import { ThemeProvider } from '@routine/ui-react';
import { globalStyles, themes } from '@routine/ui-web';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import ComponentWithTranslation from '../shared/components/ComponentWithTranslation';

function App({
  Component,
  router,
  pageProps: { session, ...pageProps },
}: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='theme-color' content='#2f2f2f' />
        {/* <meta name="robots" content="index, follow" /> */}
        <meta name='robots' content='noindex, nofollow' />
        <meta name='keywords' content='routine, checklist, notes' />
        <meta name='description' content='Routine app.' />

        <title>Routine</title>
      </Head>

      <AuthProvider session={session}>
        <ThemeProvider
          attribute='class'
          defaultTheme={themes.woodTheme.className}
          themes={[
            themes.woodTheme.className,
            themes.futurismTheme.className,
            themes.reptilianTheme.className,
          ]}>
          <ComponentWithTranslation
            Component={Component}
            pageProps={pageProps}
            router={router}
          />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

// REFERENCES:
// The viewport and title meta tags should be set in: _app.tsx:
// https://nextjs.org/docs/messages/no-document-viewport-meta
// https://nextjs.org/docs/messages/no-document-title
