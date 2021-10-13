import { styled } from '../stitches.config';

export const Text = styled('div', {
  lineHeight: '1',
  fontWeight: '400',
  margin: '0',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  // border: '1px solid $base12',
  py: '$2',

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
      primary: {
        color: '$primary11',
      },
      secondary: {
        color: '$secondary11',
      },
      accent: {
        color: '$accent11',
      },
      hiContrast: {
        color: '$hiContrast',
      },
      loContrast: {
        color: '$loContrast',
      },
      black: {
        color: '$blackA11',
      },
      white: {
        color: '$whiteA11',
      },
    },
    case: {
      upper: {
        textTransform: 'uppercase',
      },
      lower: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
      initial: {
        textTransform: 'initial',
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
      color: 'primary',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $primary11, $tint11',
      },
    },
    {
      color: 'secondary',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $secondary11, $accent11',
      },
    },
    {
      color: 'accent',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $accent11, $shade11',
      },
    },
    {
      color: 'contrast',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $hiContrast, $loContrast',
      },
    },
    {
      color: 'loContrast',
      gradient: 'true',
      css: {
        linearGradient: 'to right, $loContrast, $hiContrast',
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
    color: 'loContrast',
    case: 'initial',
  },
});

export const TextTitle = styled(Text, {
  defaultVariants: {
    size: '3',
    weight: '3',
    color: 'hiContrast',
    case: 'upper',
  },
});
export const TextHead = styled(Text, {
  defaultVariants: {
    size: '2',
    weight: '2',
    color: 'hiContrast',
    case: 'capitalize',
  },
});
export const TextSub = styled(Text, {
  defaultVariants: {
    size: '1',
    weight: '3',
    color: 'hiContrast',
    case: 'capitalize',
  },
});
