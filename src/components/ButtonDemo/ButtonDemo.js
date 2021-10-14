import React, { useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { TextHead } from '../Text';

const buttonName = ['primary', 'secondary', 'accent', 'base'];
const shapeOptions = ['sharp', 'dull', 'soft', 'pill'];

const ButtonDemo = () => {
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

  return (
    <Container responsive>
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
    </Container>
  );
};

export default ButtonDemo;
