import type { AppProps /*, AppContext */ } from 'next/app'
import { css, Global } from '@emotion/react'

const marPadZero = css`
	margin: 0;
	padding: 0;
`;

const baseStyle = css`
	height: 100%;
	width: 100%;
	${marPadZero};
`;

const globalStyles = css`
	/* @import url(''); */
	html {
		${baseStyle};
	}
	body {
		${baseStyle};
		position: relative;
		box-sizing: border-box;
	}
	#app {
		${baseStyle};
	}
	div {
		box-sizing: border-box;
	}
	p {
		${marPadZero};
	}
	h1 {
		${marPadZero};
	}
	h2 {
		${marPadZero};
	}
	h3 {
		${marPadZero};
	}
`;

const Page: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
  	<Global styles={globalStyles} />
    <Component {...pageProps} />
  </>
)

export default Page 