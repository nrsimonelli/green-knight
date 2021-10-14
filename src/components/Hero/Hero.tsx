import React from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Text } from '../Text';

const Hero = () => {
  return (
    <Container
      id='home'
      responsive
      css={{ height: 'calc(100vh - $sizes$5)' }}
    >
      <Flex direction='column' css={{ height: '$full' }}>
        <Flex
          align='end'
          css={{
            flexGrow: '1',
            '@bp3': {
              justifyContent: 'center',
            },
          }}
        >
          <Text
            size='5'
            weight='1'
            color='accent'
            gradient
            case='capitalize'
          >
            Hero Page
          </Text>
        </Flex>

        <Flex align='center' justify='center' css={{ flexGrow: '1' }}>
          <Button
            color='base'
            type='light'
            fixed='2'
            css={{ mx: '$2', py: '$2' }}
          >
            Not Me
          </Button>
          <Button
            color='accent'
            type='hot'
            fixed='2'
            css={{ mx: '$2', py: '$2' }}
          >
            Click Me
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Hero;
