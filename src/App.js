import React from 'react';

import { Button } from './components/Button';
import { globalCss, styled } from './stitches.config';

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const globalStyles = globalCss({
  body: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '$AppBg1',
    color: '$LowContrast',
    fontFamily: '$untitled',
    fontSize: '$1',
    lineHeight: '$1',
  },
});

const App = () => {
  globalStyles();
  return (
    <Root>
      <div>hello friend</div>
      <Button>Button</Button>
      <Button>Button</Button>
    </Root>
  );
};

export default App;
