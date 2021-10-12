import { styled } from '../stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  mx: 'auto',
  px: '$4',
  width: '100%',
  maxWidth: 'none',

  // Testing only
  boxShadow: 'inset 0 0 0 1px $colors$accent8',

  variants: {
    static: {
      1: { maxWidth: '$max1' },
      2: { maxWidth: '$max2' },
      3: { maxWidth: '$max3' },
      4: { maxWidth: '$max4' },
      5: { maxWidth: '$max5' },
    },
    responsive: {
      true: {
        '@bp1': {
          maxWidth: '$max1',
        },
        '@bp2': {
          maxWidth: '$max2',
        },
        '@bp3': {
          maxWidth: '$max3',
        },
        '@bp4': {
          maxWidth: '$max4',
        },
        '@bp5': {
          maxWidth: '$max5',
        },
      },
    },
    screen: {
      true: {
        minHeight: '$vh',
      },
    },
  },
});
