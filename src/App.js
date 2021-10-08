import React from 'react';

import { Button } from './components/Button';
import { Flex } from './components/Flex';
import { Container } from './components/Container';
import { globalCss } from './stitches.config';

import { Nav } from './Nav/Nav';

const globalStyles = globalCss({
  body: {
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '$appBg1',
    fontFamily: '$untitled',
    fontSize: '$1',
    lineHeight: '1',
    color: '$highContrast',
  },
});

const App = () => {
  globalStyles();

  return (
    <>
      <Nav />

      <Flex>
        <Container responsive screen>
          <div>hello paragraph</div>
          <Button color='primary' type='hot' size='1'>
            Button
          </Button>
          <Button color='secondary' type='hot' size='2'>
            Button
          </Button>
          <Button color='accent' type='hot' size='3'>
            Button
          </Button>
          <Button color='base' type='hot' size='1'>
            Button
          </Button>
        </Container>
      </Flex>

      <Flex direction='column' align='center' justify='center'>
        1
      </Flex>
      <Flex>2</Flex>
      <Flex>3</Flex>

      <Container>2</Container>
      <Container>3</Container>
      <Container>4</Container>
      <Container>5</Container>
    </>
  );
};

export default App;
