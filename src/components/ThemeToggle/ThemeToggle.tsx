import React, { useContext } from 'react';
import { Button } from '../Button';
import { altTheme } from '../../stitches.config';
import { ThemeContext } from './ThemeContext';
import { RiSunLine } from 'react-icons/ri';

type Props = {
  children?: object | string;
};

export const ThemeToggle = ({ children = <RiSunLine /> }: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      size='1'
      type='ghost'
      shape='dull'
      color='accent'
      css={{
        backgroundColor: 'transparent',
        py: '$2',
        ml: '$2',
        '&:hover': {
          backgroundColor: '$overlay4',
        },
      }}
      onClick={() =>
        setTheme(
          theme === altTheme.className
            ? 'theme-default'
            : altTheme.className
        )
      }
    >
      {children}
    </Button>
  );
};
