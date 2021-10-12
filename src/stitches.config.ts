import {
  blackA,
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
  whiteA,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const { styled, config, theme, createTheme, globalCss } =
  createStitches({
    theme: {
      colors: {
        ...tomatoDark,
        ...redDark,
        ...crimsonDark,
        ...pinkDark,
        ...plumDark,
        ...purpleDark,
        ...violetDark,
        ...mauveDark,
        ...whiteA,
        ...blackA,

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

        accent1: '$crimson1',
        accent2: '$crimson2',
        accent3: '$crimson3',
        accent4: '$crimson4',
        accent5: '$crimson5',
        accent6: '$crimson6',
        accent7: '$crimson7',
        accent8: '$crimson8',
        accent9: '$crimson9',
        accent10: '$crimson10',
        accent11: '$crimson11',
        accent12: '$crimson12',

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

        primary1: '$violet1',
        primary2: '$violet2',
        primary3: '$violet3',
        primary4: '$violet4',
        primary5: '$violet5',
        primary6: '$violet6',
        primary7: '$violet7',
        primary8: '$violet8',
        primary9: '$violet9',
        primary10: '$violet10',
        primary11: '$violet11',
        primary12: '$violet12',

        appBg1: '$base1',
        appBg2: '$base2',
        appBg3: '$base9',
        appBg4: '$base10',
        lowContrast: '$base11',
        highContrast: '$base12',

        overlay1: '$whiteA1',
        overlay2: '$whiteA2',
        overlay3: '$whiteA3',
        overlay4: '$whiteA4',
        overlay5: '$whiteA5',
        overlay6: '$whiteA6',
        overlay7: '$whiteA7',
        overlay8: '$whiteA8',
        overlay9: '$whiteA9',
        overlay10: '$whiteA10',
        overlay11: '$whiteA11',

        white: '$whiteA12',
        black: '$blackA12',
      },
      space: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '40px',
      },
      fontSizes: {
        1: '14px',
        2: '24px',
        3: '30px',
        4: '56px',
        5: '68px',
      },
      fonts: {
        untitled:
          'Untitled Sans, -apple-system, system-ui, sans-serif',
      },
      fontWeights: {
        1: 400,
        2: 500,
        3: 600,
      },
      lineHeights: {
        1: '22px',
        2: '32px',
        3: '38px',
        4: '64px',
        5: '76px',
      },
      letterSpacings: {},
      sizes: {
        none: 0,
        full: '100%',
        vh: '100vh',
        vw: '100vw',
        1: '4px',
        2: '8px',
        3: '16px',
        4: '32px',
        5: '64px',
        6: '128px',
        s1: '640px',
        s2: '768px',
        s3: '1024px',
        s4: '1280px',
        s5: '1536px',
      },
      borderWidths: {},
      borderStyles: {},
      radii: {
        sharp: '0',
        dull: '4px',
        soft: '12px',
        round: '50%',
        pill: '9999px',
      },
      shadows: {},
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        5: '999',
      },
      transitions: {},
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1280px)',
      bp5: '(min-width: 1536px)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      backgroundClip: (
        value: Stitches.PropertyValue<'backgroundClip'>
      ) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
      linearGradient: (
        value: Stitches.PropertyValue<'backgroundImage'>
      ) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;

export const altTheme = createTheme('alt-theme', {
  colors: {
    ...tomato,
    ...red,
    ...crimson,
    ...pink,
    ...plum,
    ...purple,
    ...violet,
    ...mauve,
    ...whiteA,
    ...blackA,

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

    accent1: '$crimson1',
    accent2: '$crimson2',
    accent3: '$crimson3',
    accent4: '$crimson4',
    accent5: '$crimson5',
    accent6: '$crimson6',
    accent7: '$crimson7',
    accent8: '$crimson8',
    accent9: '$crimson9',
    accent10: '$crimson10',
    accent11: '$crimson11',
    accent12: '$crimson12',

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

    primary1: '$violet1',
    primary2: '$violet2',
    primary3: '$violet3',
    primary4: '$violet4',
    primary5: '$violet5',
    primary6: '$violet6',
    primary7: '$violet7',
    primary8: '$violet8',
    primary9: '$violet9',
    primary10: '$violet10',
    primary11: '$violet11',
    primary12: '$violet12',

    appBg1: '$base1',
    appBg2: '$base2',
    appBg3: '$base9',
    appBg4: '$base10',
    lowContrast: '$base11',
    highContrast: '$base12',

    overlay1: '$blackA1',
    overlay2: '$blackA2',
    overlay3: '$blackA3',
    overlay4: '$blackA4',
    overlay5: '$blackA5',
    overlay6: '$blackA6',
    overlay7: '$blackA7',
    overlay8: '$blackA8',
    overlay9: '$blackA9',
    overlay10: '$blackA10',
    overlay11: '$blackA11',

    white: '$whiteA12',
    black: '$blackA12',
  },
});
