import { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import { Layout } from '@components/Layout';
import { EnrollmentProvider } from '@state/Enrollment';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <EnrollmentProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EnrollmentProvider>
  );
}
export default MyApp;
