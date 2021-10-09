import { styled } from '../stitches.config';

export const Text = styled('div', {
  lineHeight: '1',
  fontWeight: '400',
  margin: '0',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      3: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      4: {
        fontSize: '$4',
        lineHeight: '$4',
      },
      5: {
        fontSize: '$5',
        lineHeight: '$5',
      },
    },
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
    },
    color: {
      tomato: {
        color: '$tomato11',
      },
      red: {
        color: '$red11',
      },
      crimson: {
        color: '$crimson11',
      },
      pink: {
        color: '$pink11',
      },
      plum: {
        color: '$plum11',
      },
      purple: {
        color: '$purple11',
      },
      violet: {
        color: '$violet11',
      },
      contrast: {
        color: '$hiContrast',
      },
      lowContrast: {
        color: '$lowContrast',
      },
      black: {
        color: '$blackA11',
      },
      white: {
        color: '$whiteA11',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      color: 'tomato',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $tomato11, $red11',
      },
    },
    {
      color: 'red',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $red11, $crimson11',
      },
    },
    {
      color: 'crimson',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $crimson11, $pink11',
      },
    },
    {
      color: 'pink',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $pink11, $purple11',
      },
    },
    {
      color: 'purple',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $purple11, $plum11',
      },
    },
    {
      color: 'plum',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $plum11, $violet11',
      },
    },
    {
      color: 'contrast',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $lowContrast, $hiContrast',
      },
    },
    {
      color: 'white',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $whiteA11, $whiteA12',
      },
    },
    {
      color: 'black',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $blackA11, $blackA12',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    weight: '1',
    color: 'contrast',
  },
});
