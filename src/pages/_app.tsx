import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { BREAKPOINT_VALUES } from '~/constants/theme';
import { ColorMode } from '~/typings/theme';

function Page({ Component, pageProps }: AppProps) {
  const [colorMode] = useState<ColorMode>('light');

  return (
    <MantineProvider
      theme={{
        colorScheme: colorMode,
        breakpoints: {
          xs: BREAKPOINT_VALUES.xs,
          sm: BREAKPOINT_VALUES.sm,
          md: BREAKPOINT_VALUES.md,
          lg: BREAKPOINT_VALUES.lg,
          xl: BREAKPOINT_VALUES.xl,
        },
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
