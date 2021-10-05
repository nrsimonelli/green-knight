import { createStitches } from '@stitches/react';

import type * as Stitches from '@stitches/react';

export const { styled, config } = createStitches({
  theme: {
    colors: {},
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
