import { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

import { SideMenu } from './SideMenu';

export const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <>
      <Head>
        <title>Enrollment - Personal Data</title>
      </Head>
      <div className="flex flex-wrap">
        <SideMenu />
        <main className="w-2/3 xl:w-3/4 p-10">{children}</main>
      </div>
    </>
  );
};
