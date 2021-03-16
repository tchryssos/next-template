import type { AppProps /*, AppContext */ } from 'next/app'

const Page: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default Page 