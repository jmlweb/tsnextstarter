import '@/globals.css';

import type { AppProps } from 'next/app';

import CommonLayout from '@/layouts/CommonLayout';
import { NextPageWithLayout } from '@/types';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? CommonLayout;
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
