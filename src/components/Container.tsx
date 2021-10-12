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
      1: { maxWidth: '$s1' },
      2: { maxWidth: '$s2' },
      3: { maxWidth: '$s3' },
      4: { maxWidth: '$s4' },
      5: { maxWidth: '$s5' },
    },
    responsive: {
      true: {
        '@bp1': {
          maxWidth: '$s1',
        },
        '@bp2': {
          maxWidth: '$s2',
        },
        '@bp3': {
          maxWidth: '$s3',
        },
        '@bp4': {
          maxWidth: '$s4',
        },
        '@bp5': {
          maxWidth: '$s5',
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
