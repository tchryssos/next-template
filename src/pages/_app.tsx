import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import { BREAKPOINT_VALUES } from '~/constants/theme';
import { ColorScheme } from '~/typings/theme';

function Page({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            green: [
              '#EEF7ED',
              '#D0E9CD',
              '#B1DBAD',
              '#93CD8D',
              '#74BF6D',
              '#56B14E',
              '#458E3E',
              '#336A2F',
              '#22471F',
              '#112310',
            ],
            yellow: [
              '#FEF8E7',
              '#FCEDBB',
              '#FAE18F',
              '#F8D563',
              '#F6C937',
              '#F4BD0B',
              '#C39709',
              '#927207',
              '#624C04',
              '#312602',
            ],
            red: [
              '#FFE5EB',
              '#FFB8C8',
              '#FF8AA5',
              '#FF5C82',
              '#FF2E5F',
              '#FF003B',
              '#CC0030',
              '#990024',
              '#660018',
              '#33000C',
            ],
            blue: [
              '#E6ECFE',
              '#B9C9FE',
              '#8CA5FD',
              '#5F82FC',
              '#325FFB',
              '#053CFA',
              '#0430C8',
              '#032496',
              '#021864',
              '#010C32',
            ],
            purple: [
              '#F2EDF7',
              '#D9CEE9',
              '#C1AEDB',
              '#A98ECC',
              '#906FBE',
              '#784FB0',
              '#603F8D',
              '#482F6A',
              '#302046',
              '#181023',
            ],
            orange: [
              '#FCF2E8',
              '#F7DAC0',
              '#F2C297',
              '#ECAA6E',
              '#E79246',
              '#E27A1D',
              '#B56117',
              '#884911',
              '#5A310C',
              '#2D1806',
            ],
            teal: [
              '#EFF6F5',
              '#D2E5E4',
              '#B4D4D3',
              '#97C4C2',
              '#7AB3B0',
              '#5DA29F',
              '#4A827F',
              '#38615F',
              '#254140',
              '#132020',
            ],
            cyan: [
              '#E5F6FF',
              '#B8E7FF',
              '#8AD7FF',
              '#5CC8FF',
              '#2EB8FF',
              '#00A9FF',
              '#0087CC',
              '#006599',
              '#004466',
              '#002233',
            ],
            pink: [
              '#FFE5F2',
              '#FFB8D9',
              '#FF8AC1',
              '#FF5CA9',
              '#FF2E90',
              '#FF0078',
              '#CC0060',
              '#990048',
              '#660030',
              '#330018',
            ],
          },
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
    </ColorSchemeProvider>
  );
}

export default Page;
