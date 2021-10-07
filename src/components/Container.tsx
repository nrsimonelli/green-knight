import { styled } from '../stitches.config';

export const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  mx: 'auto',
  px: '$3',

  linearGradient:
    'to bottom right, $colors$lowContrast, $colors$highContrast',

  variants: {},
});
