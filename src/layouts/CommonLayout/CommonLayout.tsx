import Image from 'next/image';
import { FC, ReactElement } from 'react';

import styles from './CommonLayout.module.css';

interface CommonLayoutProps {
  children: ReactElement;
}

export const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

const getLayout = (page: ReactElement) => <CommonLayout>{page}</CommonLayout>;

export default getLayout;
