import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from 'next';
import { initUrqlClient } from 'next-urql';
import {
  cacheExchange,
  Client,
  dedupExchange,
  fetchExchange,
  ssrExchange,
  TypedDocumentNode,
} from 'urql';

interface WithGraphQLGetServerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queries: (string | TypedDocumentNode<any, object>)[];
  getServerSideProps?: GetServerSideProps;
  getStaticProps?: GetStaticProps;
  hasSuspense?: boolean;
}

/**
 * It is a wrapper for server side props functions that is used to get cached
 * GraphQL queries.
 *
 * @remarks IMPORTANT: Use it with `withGraphQLPage` wrapper in the target page.
 *
 * @example
 * With just a query:
 * ```ts
 * export const getServerSideProps = withGraphQLGetServerProps({
 *   queries: [LoremIpsumQuery],
 * });
 * ```
 *
 * @example
 * With a query and a custom getServerSideProps:
 * ```ts
 * export const getServerSideProps = withGraphQLGetServerProps({
 *   queries: [LoremIpsumQuery],
 *   getServerSideProps: async () => {
 *     // your logic here
 *
 *     return {
 *       props: {
 *         // your props here
 *       }
 *     }
 *   }
 * });
 * ```
 *
 * @param queries Array with target GraphQL queries.
 * @param getServerSideProps Optional Next.js 'getServerSideProps' function.
 * @param getStaticProps Optional Next.js 'getStaticProps' function.
 * @param hasSuspense Optional boolean to enable/disable the server side
 * support for the new 'Suspense' component (experimental) in React (v17).
 * @returns The server side GraphQL cached query and, optionally, a custom
 * Next.js server side function.
 */
export const withGraphQLGetServerProps = ({
  queries,
  getServerSideProps,
  getStaticProps,
  hasSuspense = false,
}: WithGraphQLGetServerProps) => {
  return async (context: GetServerSidePropsContext) => {
    const ssrCache = ssrExchange({ isClient: false });

    const client = initUrqlClient(
      {
        url: `${process.env.HOST}/api/graphql`,
        exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
      },

      hasSuspense,
    ) as Client;

    const queriesPromisesArray = queries.map((query) => {
      return client.query(query).toPromise();
    });

    // Populate queries cache.
    await Promise.all(queriesPromisesArray);

    let serverSideReturn = {
      props: {},
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    if (getServerSideProps) {
      serverSideReturn = await getServerSideProps(context);
    } else if (getStaticProps) {
      serverSideReturn = await getStaticProps(context);
    }

    return {
      ...serverSideReturn,

      props: {
        // `urqlState` is a required keyword for `withUrqlClient` to be able
        // to get the cache content.
        urqlState: ssrCache.extractData(),

        ...serverSideReturn.props,
      },
    };
  };
};
