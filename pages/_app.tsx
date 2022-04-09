import { ApolloProvider } from '@apollo/client';
import { ModalProvider } from '../components/providers/ModalProvider';
import { useApollo } from '../graphql/useApollo';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

// Add bootstrap css & custom theme & global CSS
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrapTheme.scss';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
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
