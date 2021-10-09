import React from 'react';

import { Button } from './components/Button';
import { Flex } from './components/Flex';
import { Text } from './components/Text';
import { Container } from './components/Container';
import { globalCss } from './stitches.config';

import { Nav } from './components/Nav/Nav';

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
          <div>hello there</div>
          <Text
            css={{
              my: '$3',
            }}
            size='3'
          >
            The water temperature in the Atlantic is also greatly
            affected by currents, most notably the Gulf Stream.
          </Text>
          <Text
            css={{
              my: '$3',
            }}
            size='1'
            color='lowContrast'
          >
            Variants are an excellent way to express how a component
            could look. It allows us to separate our design concerns
            into isolated rules.{' '}
          </Text>
          <Text
            css={{
              my: '$3',
            }}
            size={{
              '@initial': '1',
              '@bp1': '2',
              '@bp2': '3',
            }}
            color='pink'
            gradient='true'
          >
            At the time, we were creating faux variants on top of
            existing styling solutions. However, the result wasn't
            ideal. We needed an interoperable solution, so both
            designers and developers could work on the same source of
            truth.{' '}
          </Text>
          <Text
            css={{
              my: '$3',
            }}
            size='1'
            color='purple'
            gradient='true'
          >
            It introduces a first-class variant API, enabling design
            system authors to express their intent better. It's fully
            typed, catching potential mistakes and improving the
            scalability of design systems. It's lightweight, coming in
            at less than 5kb. And finally, it's a breeze to get up and
            running with it.{' '}
          </Text>
          <Text
            css={{
              my: '$3',
            }}
            size='2'
            color='tomato'
            gradient='true'
          >
            Stitches offers a first-class API for creating variants.
            Because of this, they're automatically typed.{' '}
          </Text>
          <Text
            css={{
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
              my: '$3',
            }}
            size='2'
            color='red'
            gradient='true'
          >
            Notice how currently there are some base styles and some
            variant styles. This creates some implicit variants. Let
            me explain...{' '}
          </Text>
          <Text
            css={{
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
              my: '$3',
            }}
            size='2'
            color='contrast'
            gradient='true'
          >
            When you separate your stylistic concerns into variants,
            you need to explicitly tell your component which variant
            to use.{' '}
          </Text>
          <Text
            css={{
              my: '$3',
            }}
            size='2'
            color='white'
            gradient='true'
          >
            But you can define default variants, essentially mimicking
            the base styles behaviour—without compromises.{' '}
          </Text>
          <Text
            css={{
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
