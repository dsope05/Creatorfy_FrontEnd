import { ApolloProvider } from '@apollo/client';
import { ModalProvider } from '../components/providers/ModalProvider';
import { useApollo } from '../graphql/useApollo';
import type { AppProps } from 'next/app';
import '../styles/globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";

// Mobile devices default to http, but the share button requires https for mobile.
if(process.env.NODE_ENV === 'production' && window.location.protocol !== "https:") window.location.protocol = "https:";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ApolloProvider>
  );
}

export default MyApp;
