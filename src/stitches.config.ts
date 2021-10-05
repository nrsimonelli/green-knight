import { createStitches } from '@stitches/react';

import type * as Stitches from '@stitches/react';
import {
  crimson,
  crimsonDark,
  mauve,
  mauveDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  purple,
  purpleDark,
  red,
  redDark,
  tomato,
  tomatoDark,
  violet,
  violetDark,
} from '@radix-ui/colors';

export const { styled, config, theme, createTheme } = createStitches({
  theme: {
    colors: {
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...mauve,

      // App backgrounds and raised components
      // 1 - 2 - 3
      // normal, hover, active. Buttons are +1 to each
      // 3 - 4 - 5
      // borders non-interactive, interactive, hover
      // 6 - 7 - 8
      // pure color & solid bg
      // 9 - 10
      // low and high contrast text
      // 11 - 12
      // Dark modes use the same scale

      base1: '$mauve1',
      base2: '$mauve2',
      base3: '$mauve3',
      base4: '$mauve4',
      base5: '$mauve5',
      base6: '$mauve6',
      base7: '$mauve7',
      base8: '$mauve8',
      base9: '$mauve9',
      base10: '$mauve10',
      base11: '$mauve11',
      base12: '$mauve12',

      primary1: '$crimson1',
      primary2: '$crimson2',
      primary3: '$crimson3',
      primary4: '$crimson4',
      primary5: '$crimson5',
      primary6: '$crimson6',
      primary7: '$crimson7',
      primary8: '$crimson8',
      primary9: '$crimson9',
      primary10: '$crimson10',
      primary11: '$crimson11',
      primary12: '$crimson12',

      secondary1: '$plum1',
      secondary2: '$plum2',
      secondary3: '$plum3',
      secondary4: '$plum4',
      secondary5: '$plum5',
      secondary6: '$plum6',
      secondary7: '$plum7',
      secondary8: '$plum8',
      secondary9: '$plum9',
      secondary10: '$plum10',
      secondary11: '$plum11',
      secondary12: '$plum12',

      accent1: '$violet1',
      accent2: '$violet2',
      accent3: '$violet3',
      accent4: '$violet4',
      accent5: '$violet5',
      accent6: '$violet6',
      accent7: '$violet7',
      accent8: '$violet8',
      accent9: '$violet9',
      accent10: '$violet10',
      accent11: '$violet11',
      accent12: '$violet12',
    },
    space: {},
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...mauveDark,

    base1: '$mauve1',
    base2: '$mauve2',
    base3: '$mauve3',
    base4: '$mauve4',
    base5: '$mauve5',
    base6: '$mauve6',
    base7: '$mauve7',
    base8: '$mauve8',
    base9: '$mauve9',
    base10: '$mauve10',
    base11: '$mauve11',
    base12: '$mauve12',

    primary1: '$crimson1',
    primary2: '$crimson2',
    primary3: '$crimson3',
    primary4: '$crimson4',
    primary5: '$crimson5',
    primary6: '$crimson6',
    primary7: '$crimson7',
    primary8: '$crimson8',
    primary9: '$crimson9',
    primary10: '$crimson10',
    primary11: '$crimson11',
    primary12: '$crimson12',

    secondary1: '$plum1',
    secondary2: '$plum2',
    secondary3: '$plum3',
    secondary4: '$plum4',
    secondary5: '$plum5',
    secondary6: '$plum6',
    secondary7: '$plum7',
    secondary8: '$plum8',
    secondary9: '$plum9',
    secondary10: '$plum10',
    secondary11: '$plum11',
    secondary12: '$plum12',

    accent1: '$violet1',
    accent2: '$violet2',
    accent3: '$violet3',
    accent4: '$violet4',
    accent5: '$violet5',
    accent6: '$violet6',
    accent7: '$violet7',
    accent8: '$violet8',
    accent9: '$violet9',
    accent10: '$violet10',
    accent11: '$violet11',
    accent12: '$violet12',
  },
});
