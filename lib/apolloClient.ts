import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

/* Documentation:
  https://www.apollographql.com/blog/apollo-client/next-js/building-a-next-js-app-with-slash-graphql/
  https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/ */

// TODO: Update with Creatorfy backend base url
const APOLLO_CLIENT_URI = undefined;
let apolloClient;

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: APOLLO_CLIENT_URI || '/',
    }),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = null): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
