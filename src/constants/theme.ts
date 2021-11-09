import { ColorMode, ColorModeColors } from '~/typings/colorMode';

const breakpointValues = {
  xxs: 479,
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
};

const StandardModeColors: ColorModeColors = {
  text: '#000',
  lighten: 'rgba(255, 255, 255, 0.6)',
  darken: 'rgba(0, 0, 0, 0.2)',
  background: '#fff',
};

const theme = {
  breakpointValues,
  breakpoints: {
    xxs: `@media only screen and (max-width: ${breakpointValues.xxs}px)`,
    xs: `@media only screen and (min-width: ${breakpointValues.xs}px)`,
    sm: `@media only screen and (min-width: ${breakpointValues.sm}px)`,
    md: `@media only screen and (min-width: ${breakpointValues.md}px)`,
    lg: `@media only screen and (min-width: ${breakpointValues.lg}px)`,
    xl: `@media only screen and (min-width: ${breakpointValues.xl}px)`,
  },
  spacing: {
    0: '0rem',
    4: '0.25rem',
    8: '0.5rem',
    12: '0.75rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    48: '3rem',
    64: '4rem',
    80: '5rem',
    128: '8rem',
  },
  border: {
    borderWidth: {
      1: '1px',
      3: '0.1875rem',
    },
  },
  fontSize: {
    body: '1rem',
    title: '2rem',
  },
  fontFamily: {
    normal: 'sans-serif',
  },
  lineHeight: {
    normal: 1.2,
  },
  fontWeight: {
    regular: 400,
    bold: 700,
    black: 800,
  },
};

export const StandardTheme = { ...theme, colors: StandardModeColors };

export type ThemeShape = typeof StandardTheme;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends ThemeShape {}

export const themes: Record<ColorMode, Theme> = {
  standard: StandardTheme,
};
