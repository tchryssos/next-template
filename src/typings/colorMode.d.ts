type ColorHash = `#${string}`;
type ColorRgba = `rgba(${number},${number},${number},${number})`;

export interface ColorModeColors {
  background: ColorHash;
  text: ColorHash;
  darken: ColorRgba;
  lighten: ColorRgba;
}

export type ColorMode = 'standard';
