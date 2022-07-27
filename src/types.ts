import { NextPage } from 'next';
import { ReactElement } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};
