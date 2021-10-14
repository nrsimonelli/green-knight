import React from 'react';
import { globalCss } from './stitches.config';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import ButtonDemo from './components/ButtonDemo/ButtonDemo';
import About from './components/About';

const globalStyles = globalCss({
  body: {
    transition: 'all 200ms ease-in-out 0s',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '$appBg1',
    fontFamily: '$untitled',
    fontSize: '$1',
    lineHeight: '1',
    color: '$hiContrast',
  },
});

const App = () => {
  globalStyles();

  return (
    <>
      <Nav Title='Green knight' />
      <Hero />
      <ButtonDemo />
      <About />
    </>
  );
};

export default App;
