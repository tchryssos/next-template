import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'CHANGE ME' }: Props) => (
  <div>
    <Head>
      {/* Uncomment the following lines if using google fonts */}
      {/* <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="use-credentials"
      />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com/" /> */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Troy Chryssos' Next JS template"></meta>
    </Head>
    {children}
  </div>
);

export default Layout;
