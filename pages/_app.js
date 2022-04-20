import { SessionProvider } from 'next-auth/react';

import Layout from '@/components/layout/layout';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
