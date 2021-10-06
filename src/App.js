import React, { useState, useEffect } from 'react';

import { Button } from './components/Button';
import { altTheme, globalCss, styled } from './stitches.config';

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const globalStyles = globalCss({
  body: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '$AppBg1',
    color: '$HighContrast',
    fontFamily: '$untitled',
    fontSize: '$1',
    lineHeight: '1',
  },
});

const App = () => {
  globalStyles();
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    document.body.classList.remove('theme-default', altTheme);
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <Root>
      <Button color='primary' size='1'>
        Button
      </Button>
      <Button color='primary' type='hot' size='2'>
        Button
      </Button>
      <Button color='primary' size='3'>
        Button
      </Button>
      <Button color='primary' type='ghost' size='1'>
        Button
      </Button>
      <Button color='secondary' size='1'>
        Button
      </Button>
      <Button color='secondary' type='hot' size='2'>
        Button
      </Button>
      <Button color='secondary' size='3'>
        Button
      </Button>
      <Button color='secondary' type='ghost' size='1'>
        Button
      </Button>
      <Button color='accent' size='1'>
        Button
      </Button>
      <Button color='accent' type='hot' size='2'>
        Button
      </Button>
      <Button color='accent' size='3'>
        Button
      </Button>
      <Button color='accent' type='ghost' size='1'>
        Button
      </Button>
      <Button color='neutral' size='1'>
        Button
      </Button>
      <Button color='neutral' type='hot' size='2'>
        Button
      </Button>
      <Button color='neutral' size='3'>
        Button
      </Button>
      <Button color='neutral' type='ghost' size='1'>
        Button
      </Button>
      <Button
        size='2'
        onClick={() =>
          setTheme(
            theme === 'theme-default' ? altTheme : 'theme-default'
          )
        }
      >
        Theme Toggle
      </Button>
    </Root>
  );
};

export default App;
