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
  WebkitTaphighlightColor: 'rgba(0,0,0,0)',
  px: '$2',
  py: '$1',

  '&:disabled': {
    backgroundColor: '$base2',
    boxShadow: 'inset 0 0 0 1px $colors$base7',
    color: '$base8',
    pointerEvents: 'none',
  },

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
        fontWeight: '$2',
      },
      light: {},
    },
    fixed: {
      1: {
        minWidth: 'max-content',
        width: '$5',
      },
      2: {
        minWidth: 'max-content',
        width: '$6',
      },
      3: {
        minWidth: 'max-content',
        width: '192px',
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
        backgroundColor: '$primary4',
        color: '$primary11',
        '&:hover': {
          backgroundColor: '$primary5',
        },
        '&:active': {
          backgroundColor: '$primary6',
        },
      },
      secondary: {
        backgroundColor: '$secondary4',
        color: '$secondary11',
        '&:hover': {
          backgroundColor: '$secondary5',
        },
        '&:active': {
          backgroundColor: '$secondary6',
        },
      },
      accent: {
        backgroundColor: '$accent4',
        color: '$accent11',
        '&:hover': {
          backgroundColor: '$accent5',
        },
        '&:active': {
          backgroundColor: '$accent6',
        },
      },
      base: {
        backgroundColor: '$base4',
        color: '$base11',
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
      color: 'base',
      type: 'ghost',
      css: {
        backgroundColor: '$base1',
        boxShadow: 'inset 0 0 0 1px $colors$base7',
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
        color: '$white',
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
        color: '$white',
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
        color: '$black',
        backgroundColor: '$accent9',
        '&:hover': {
          backgroundColor: '$accent10',
        },
      },
    },
    {
      color: 'base',
      type: 'hot',
      css: {
        color: '$white',
        backgroundColor: '$base9',
        '&:hover': {
          backgroundColor: '$base10',
        },
      },
    },
  ],
  defaultVariants: {
    shape: 'dull',
    color: 'base',
    size: '1',
    type: 'light',
  },
});
