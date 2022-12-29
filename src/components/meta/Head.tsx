import NextHead from 'next/head';

type HeadProps = {
  title?: string;
};

export function Head({ title = 'CHANGE ME' }: HeadProps) {
  return (
    <NextHead>
      {/* Uncomment the following lines if using google fonts */}
      {/* <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="use-credentials"
    />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com/" /> */}
      <title>{title}</title>
      <meta charSet="utf-16" />
      <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      <meta content="Troy Chryssos' Next JS template" name="description" />
    </NextHead>
  );
}
