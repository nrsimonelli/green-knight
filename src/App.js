import React, { useState } from 'react';

import { Button } from './components/Button';
import { Flex } from './components/Flex';
import {
  Text,
  TextHead,
  TextSub,
  TextTitle,
} from './components/Text';
import { Container } from './components/Container';
import { globalCss } from './stitches.config';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';

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

const buttonName = ['primary', 'secondary', 'accent', 'base'];
const shapeOptions = ['sharp', 'dull', 'soft', 'pill'];

const App = () => {
  globalStyles();

  const [buttonSize, setButtonSize] = useState(1);
  const [buttonShape, setButtonShape] = useState(0);

  const handleButtonSizeChange = () => {
    if (buttonSize === 3) {
      setButtonSize(1);
    } else {
      setButtonSize(buttonSize + 1);
    }
  };
  const handleButtonShapeChange = () => {
    if (buttonShape === 3) {
      setButtonShape(0);
    } else {
      setButtonShape(buttonShape + 1);
    }
  };

  const buttonLabelWidth = 75 + 25 * buttonSize;

  const ButtonDemo = () => {
    return (
      <Flex id='demo' direction='column' css={{ my: '$3' }}>
        <Flex css={{ mt: '$3' }}>
          <TextHead css={{ mr: '$4' }}>Buttons</TextHead>
          <Button
            type='ghost'
            color='accent'
            onClick={handleButtonSizeChange}
            size='1'
            css={{ px: '$4', mr: '$3' }}
          >{`${buttonSize}`}</Button>
          <Button
            type='ghost'
            color='accent'
            onClick={handleButtonShapeChange}
            size='1'
            css={{ textTransform: 'capitalize', px: '$4' }}
          >
            {shapeOptions[buttonShape]}
          </Button>
        </Flex>
        {buttonName.map((label, index) => (
          <Flex
            key={index}
            direction='row'
            align='end'
            css={{ mt: '$2', p: '$2', '& > Button': { mr: '$3' } }}
          >
            <Button
              size={buttonSize}
              shape={shapeOptions[buttonShape]}
              type='hot'
              color={label}
              css={{
                textTransform: 'capitalize',
                width: `${buttonLabelWidth}px`,
              }}
            >
              {buttonName[index]}
            </Button>
            <Button
              size={buttonSize}
              shape={shapeOptions[buttonShape]}
              color={label}
            >
              Default
            </Button>
            <Button
              size={buttonSize}
              shape={shapeOptions[buttonShape]}
              color={label}
              type='ghost'
            >
              Ghost
            </Button>
            <Button
              size={buttonSize}
              shape={shapeOptions[buttonShape]}
              color={label}
              disabled
            >
              Disabled
            </Button>
          </Flex>
        ))}
      </Flex>
    );
  };

  return (
    <>
      <Nav Title='Green knight' />
      <Hero />
      <Flex>
        <Container static='2' screen>
          <ButtonDemo />
          <Flex direction='column'>
            <Flex
              direction='row'
              align='end'
              justify='start'
              wrap='wrap'
            >
              <Text color='hiContrast' size='1'>
                14px
              </Text>
              <Text color='hiContrast' size='2'>
                24px
              </Text>
              <Text color='hiContrast' size='3'>
                30px
              </Text>
              <Text color='hiContrast' size='4'>
                56px
              </Text>
              <Text color='hiContrast' size='5'>
                68px
              </Text>
            </Flex>
            <TextTitle case='capitalize'>title</TextTitle>
            <TextHead case='capitalize'>heading</TextHead>
            <TextSub case='capitalize'>subheading</TextSub>
            <Text case='capitalize'>text</Text>

            <TextTitle case='initial'>Lorem</TextTitle>

            <Text color='hiContrast'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
            <TextHead>Temet Nosce</TextHead>
            <Text>
              Morbi tempus iaculis urna id volutpat. Arcu non odio
              euismod lacinia at. Pellentesque habitant morbi
              tristique senectus et. Auctor augue mauris augue neque
              gravida in fermentum. Ac turpis egestas integer eget
              aliquet nibh praesent. Faucibus et molestie ac feugiat
              sed lectus vestibulum mattis. Pretium fusce id velit ut
              tortor pretium viverra suspendisse potenti. Quis auctor
              elit sed vulputate mi. Enim ut sem viverra aliquet. Quis
              enim lobortis scelerisque fermentum dui faucibus in. Sed
              egestas egestas fringilla phasellus.
            </Text>
            <Text>
              Neque egestas congue quisque egestas diam in arcu
              cursus. Dictumst quisque sagittis purus sit amet
              volutpat. Pretium fusce id velit ut tortor. Adipiscing
              enim eu turpis egestas pretium aenean pharetra. Id diam
              vel quam elementum. Rhoncus est pellentesque elit
              ullamcorper dignissim cras tincidunt. Et tortor
              consequat id porta. Lobortis scelerisque fermentum dui
              faucibus in. Viverra maecenas accumsan lacus vel
              facilisis volutpat. Ornare lectus sit amet est placerat
              in egestas erat. Purus viverra accumsan in nisl nisi
              scelerisque eu ultrices. Mi eget mauris pharetra et
              ultrices. Vitae et leo duis ut diam quam nulla. Egestas
              diam in arcu cursus. Amet risus nullam eget felis eget
              nunc lobortis mattis aliquam. Quis ipsum suspendisse
              ultrices gravida dictum fusce. Sed risus ultricies
              tristique nulla aliquet enim. Fermentum dui faucibus in
              ornare quam viverra orci. Amet dictum sit amet justo
              donec.
            </Text>

            <TextHead>Odio morbi quis</TextHead>
            <Text>
              Sociis natoque penatibus et magnis dis parturient montes
              nascetur ridiculus. Praesent semper feugiat nibh sed
              pulvinar proin gravida. Velit aliquet sagittis id
              consectetur purus ut faucibus pulvinar elementum. Eu
              facilisis sed odio morbi quis. Tristique sollicitudin
              nibh sit amet commodo nulla. Nibh sed pulvinar proin
              gravida hendrerit lectus a. Arcu dictum varius duis at
              consectetur lorem donec. Vitae aliquet nec ullamcorper
              sit amet risus nullam eget felis. Venenatis lectus magna
              fringilla urna porttitor rhoncus. Sed risus ultricies
              tristique nulla aliquet enim tortor at. Volutpat
              consequat mauris nunc congue nisi vitae suscipit tellus
              mauris. Enim nunc faucibus a pellentesque sit amet
              porttitor eget. Magna etiam tempor orci eu. Adipiscing
              at in tellus integer feugiat scelerisque varius. Sed
              augue lacus viverra vitae congue eu consequat. Maecenas
              ultricies mi eget mauris.
            </Text>
            <TextSub>more info</TextSub>
          </Flex>

          <Text
            css={{
              my: '$3',
            }}
            size={{
              '@initial': '1',
              '@bp1': '2',
              '@bp2': '3',
            }}
            color='primary'
            gradient='true'
          >
            At the time, we were creating faux variants on top of
            existing styling solutions. However, the result wasn't
            ideal. We needed an interoperable solution, so both
            designers and developers could work on the same source of
            truth.{' '}
          </Text>
        </Container>
      </Flex>
    </>
  );
};

export default App;
