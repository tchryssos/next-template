import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { ColorMode } from '~/typings/colorMode';

function Page({ Component, pageProps }: AppProps) {
  const [colorMode] = useState<ColorMode>('light');

  return (
    <MantineProvider
      theme={{
        colorScheme: colorMode,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default Page;
