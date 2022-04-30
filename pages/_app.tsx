import { InMemoryCache, ApolloProvider, ApolloClient } from '@apollo/client';
import { useApollo } from '../graphql/useApollo';
import type { AppProps } from 'next/app';

import { ModalProvider } from '../components/providers/ModalProvider';
import Layout from '../components/layout';

// Add bootstrap css & custom theme & global CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrapTheme.scss';
import '../styles/globals.css';

const apolloClient = new ApolloClient({
  uri: '/query/graphql/',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </ApolloProvider>
  );
}

export default MyApp;
