import React from 'react';

import { Button } from './components/Button';
import { Flex } from './components/Flex';
import { Text } from './components/Text';
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
          <Text
            css={{
              width: '400px',
              my: '$3',
            }}
            size='3'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '400px',
              my: '$3',
            }}
            size='2'
            color='lowContrast'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='pink'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='purple'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='tomato'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='crimson'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='red'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='plum'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='violet'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='white'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              width: '200px',
              my: '$3',
            }}
            size='2'
            color='black'
            gradient='true'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
        </Container>
      </Flex>

      <Flex direction='column' align='center' justify='center'>
        1
      </Flex>

      <Flex>3</Flex>
    </>
  );
};

export default App;
