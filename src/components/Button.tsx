import { styled } from '../stitches.config';

export const Button = styled('button', {
  // get rid of ugly default styles
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  px: '$3',
  py: '$2',
  margin: '$3',
  // cursor: 'default',

  // variants as props
  variants: {
    shape: {
      sharp: {
        borderRadius: '$sharp',
      },
      dull: {
        borderRadius: '$dull',
      },
      soft: {
        borderRadius: '$soft',
      },
      round: {
        borderRadius: '$round',
      },
      pill: {
        borderRadius: '$pill',
      },
    },
    type: {
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      hot: {
        color: '$whiteA12',
      },
    },
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
    },
    color: {
      primary: {
        color: '$primary11',
        backgroundColor: '$primary4',
        '&:hover': {
          backgroundColor: '$primary5',
        },
        '&:active': {
          backgroundColor: '$primary6',
        },
      },
      secondary: {
        color: '$secondary11',
        backgroundColor: '$secondary4',
        '&:hover': {
          backgroundColor: '$secondary5',
        },
        '&:active': {
          backgroundColor: '$secondary6',
        },
      },
      accent: {
        color: '$accent11',
        backgroundColor: '$accent4',
        '&:hover': {
          backgroundColor: '$accent5',
        },
        '&:active': {
          backgroundColor: '$accent6',
        },
      },
      neutral: {
        color: '$base11',
        backgroundColor: '$base4',
        '&:hover': {
          backgroundColor: '$base5',
        },
        '&:active': {
          backgroundColor: '$base6',
        },
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      type: 'ghost',
      css: {
        backgroundColor: '$primary1',
        boxShadow: 'inset 0 0 0 1px $colors$primary7',
        color: '$primary11',
        '&:hover': {
          backgroundColor: '$primary1',
          boxShadow: 'inset 0 0 0 1px $colors$primary8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary8, 0 0 0 1px $colors$primary8',
        },
      },
    },
    {
      color: 'secondary',
      type: 'ghost',
      css: {
        backgroundColor: '$secondary1',
        boxShadow: 'inset 0 0 0 1px $colors$secondary7',
        color: '$secondary11',
        '&:hover': {
          backgroundColor: '$secondary1',
          boxShadow: 'inset 0 0 0 1px $colors$secondary8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondary8, 0 0 0 1px $colors$secondary8',
        },
      },
    },
    {
      color: 'accent',
      type: 'ghost',
      css: {
        backgroundColor: '$accent1',
        boxShadow: 'inset 0 0 0 1px $colors$accent7',
        color: '$accent11',
        '&:hover': {
          backgroundColor: '$accent1',
          boxShadow: 'inset 0 0 0 1px $colors$accent8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$accent8, 0 0 0 1px $colors$accent8',
        },
      },
    },
    {
      color: 'neutral',
      type: 'ghost',
      css: {
        backgroundColor: '$base1',
        boxShadow: 'inset 0 0 0 1px $colors$base7',
        color: '$base11',
        '&:hover': {
          backgroundColor: '$base1',
          boxShadow: 'inset 0 0 0 1px $colors$base8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$base8, 0 0 0 1px $colors$base8',
        },
      },
    },
    {
      color: 'primary',
      type: 'hot',
      css: {
        backgroundColor: '$primary9',
        '&:hover': {
          backgroundColor: '$primary10',
        },
      },
    },
    {
      color: 'secondary',
      type: 'hot',
      css: {
        backgroundColor: '$secondary9',
        '&:hover': {
          backgroundColor: '$secondary10',
        },
      },
    },
    {
      color: 'accent',
      type: 'hot',
      css: {
        backgroundColor: '$accent9',
        '&:hover': {
          backgroundColor: '$accent10',
        },
      },
    },
    {
      color: 'neutral',
      type: 'hot',
      css: {
        backgroundColor: '$base9',
        '&:hover': {
          backgroundColor: '$base10',
        },
      },
    },
  ],
  defaultVariants: {
    shape: 'dull',
  },
});
