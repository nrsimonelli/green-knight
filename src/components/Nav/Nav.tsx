import React from 'react';
import { RiDropFill } from 'react-icons/ri';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Text, TextSub } from '../Text';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { LINK_TREE } from '../../constants';

type Props = {
  Title?: string;
  Logo?: object | string;
  Links?: object;
  Toggle?: boolean;
};

const Nav = ({
  Title = 'untitled',
  Logo = <RiDropFill />,
  Links = LINK_TREE,
  Toggle = false,
}: Props) => {
  return (
    <Flex align='center' css={{ height: '$5' }}>
      <Container css={{ height: '$full' }}>
        <Flex align='center' css={{ height: '$full' }}>
          <Flex css={{ flexBasis: 'max-content' }}>
            <Text
              gradient
              color='accent'
              size='3'
              weight='2'
              case='capitalize'
            >
              {Title}
            </Text>
          </Flex>
          <Flex
            justify='center'
            align='end'
            css={{ flexGrow: '7', height: '$full' }}
          >
            <Text size='2' gradient color='accent'>
              {Logo}
            </Text>
          </Flex>
          <Flex align='center' justify='end'>
            {LINK_TREE.map((link, index) => (
              <TextSub
                as='a'
                href={link.href}
                css={{ ml: '$2' }}
                key={index}
              >
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

export default Nav;
