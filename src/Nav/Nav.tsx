import React from 'react';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Button } from '../components/Button';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const Nav = () => {
  return (
    <Flex align='center' css={{ height: '$5' }}>
      <Container responsive>
        <Flex>
          <Flex>
            <div>title</div>
            <Button>Button</Button>
            <ThemeToggle
              size='2'
              type='ghost'
              shape='soft'
              color='accent'
            ></ThemeToggle>
          </Flex>
          <Flex wrap='noWrap'>
            <div>Link</div>
            <div>Link</div>
            <div>Link</div>
            <Button color='primary' shape='pill'>
              yo
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
