import React from 'react';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const Nav = () => {
  return (
    <Flex
      align='center'
      css={{ height: '$5', border: '1px solid $accent9' }}
    >
      <Container responsive>
        <Flex>
          <Flex>
            <div>title</div>
            <ThemeToggle />
          </Flex>
          <Flex wrap='noWrap'>
            <div>Link</div>
            <div>Link</div>
            <div>Link</div>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
