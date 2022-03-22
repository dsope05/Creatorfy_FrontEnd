import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

/* Documentation:
  https://www.apollographql.com/blog/apollo-client/next-js/building-a-next-js-app-with-slash-graphql/
  https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/ */


let apolloClient;
const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_APOLLO_CLIENT_URI,
  });

  const authLink = setContext((_, { headers }) => {
    const token = process.env.NEXT_PUBLIC_DEVELOPER_AUTH_TOKEN;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      }
    }
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

const initializeApollo = (initialState = null): ApolloClient<NormalizedCacheObject> => {
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
