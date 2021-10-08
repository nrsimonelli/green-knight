import { styled } from '../stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  mx: 'auto',
  px: '$3',
  width: '100%',
  maxWidth: 'none',

  linearGradient: 'to bottom right, $colors$primary3, $colors$base9',

  variants: {
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
