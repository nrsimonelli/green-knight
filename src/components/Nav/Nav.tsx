import React from 'react';
import { RiAnchorFill } from 'react-icons/ri';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Text, TextSub } from '../Text';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LINK_TREE } from '../../constants';

export const Nav = () => {
  return (
    <Flex
      align='center'
      css={{ height: '$5', backgroundColor: '$primary6' }}
    >
      <Container css={{ height: '$full' }}>
        <Flex align='center' css={{ height: '$full' }}>
          <Flex css={{ flexBasis: 'max-content' }}>
            <Text
              gradient
              color='purple'
              size='3'
              weight='2'
              case='capitalize'
            >
              untitled
            </Text>
            <Text
              size='2'
              gradient
              color='purple'
              css={{
                marginTop: 'auto',
                mx: '$3',
              }}
            >
              <RiAnchorFill />
            </Text>
          </Flex>
          <Flex align='center' justify='end' css={{ flexGrow: '7' }}>
            {LINK_TREE.map((link, index) => (
              <TextSub css={{ ml: '$2' }} key={index}>
                {link.title}
              </TextSub>
            ))}
            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
