import { NextPage } from 'next';
import { withUrqlClient, WithUrqlClientOptions } from 'next-urql';
import { ClientOptions, RequestPolicy } from 'urql';

interface WithGraphQLPageWrapper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageComponent: NextPage<any, any>;

  // Options of the "ClientOptions" type.
  url?: string;
  requestPolicy?: RequestPolicy;
  extraClientConfig?: Omit<ClientOptions, 'url, requestPolicy'>;

  // Options of the "WithUrqlClientOptions" type.
  ssr?: boolean;
  neverSuspend?: boolean;
  staleWhileRevalidate?: boolean;
}

/**
 * It wraps a Next.js Page Component with a GraphQL client.
 *
 * @example
 * ```ts
 * export default withGraphQLPage({
 *   pageComponent: LoremIpsumPageComponent,
 * });
 * ```
 *
 * @param pageComponent - Next.js Page Component.
 * @param url - Override the default GraphQL API URL.
 * @param requestPolicy - Override the default ('cache-and-network') GraphQL
 * Request Policy.
 * [Request Policies](https://formidable.com/open-source/urql/docs/basics/document-caching/#request-policies)
 * @param extraClientConfig - All optional configurations of the next-urql client.
 * [Config Options](https://github.com/FormidableLabs/urql/blob/main/packages/next-urql/README.md#api)
 * @param ssr - Set 'false' (default) to not wrap the page component using
 * 'getInitialProps' function with the 'next-urql' logic.
 * [Ref](https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs)
 * @param neverSuspend - Disable (default: true) the 'Suspense' component support.
 * [Ref](https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#nextjs)
 * @param staleWhileRevalidate - It is useful to enable when using static
 * generation to ensure a updated data.
 * [Ref](https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#stale-while-revalidate)
 * @return Next.js Page Component with Urql client.
 */
export const withGraphQLPage = ({
  pageComponent,
  url = `${process.env.HOST}/api/graphql`,
  // "cache-and-network" - option to show cache contents and then fetch new data.
  requestPolicy = 'cache-and-network',
  extraClientConfig,
  ssr = false,
  neverSuspend = true,
  staleWhileRevalidate = false,
}: WithGraphQLPageWrapper) => {
  const clientConfig = {
    url,
    requestPolicy,
    ...extraClientConfig,
  } as ClientOptions;

  const withUrqlOptions: WithUrqlClientOptions = {
    ssr,
    neverSuspend,
    staleWhileRevalidate,
  };

  return withUrqlClient(() => clientConfig, withUrqlOptions)(pageComponent);
};
