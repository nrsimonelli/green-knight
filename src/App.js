import React, { useState, useEffect } from 'react';

import { Button } from './components/Button';
import { Flex } from './components/Flex';
import { altTheme, globalCss, styled } from './stitches.config';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const TestDiv = styled('div', {
  border: '1px solid red',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const globalStyles = globalCss({
  body: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '$appBg1',
    fontFamily: '$untitled',
    fontSize: '$1',
    lineHeight: '1',
    color: '$lowContrast',
  },
});

const App = () => {
  globalStyles();

  return (
    <>
      <Root>
        <Button>Button</Button>

        <ThemeToggle />
        <Button>Button</Button>
      </Root>

      <Flex>hello</Flex>
    </>
  );
};

export default App;
