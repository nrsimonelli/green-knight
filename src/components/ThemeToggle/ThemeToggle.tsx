import React, { useContext } from 'react';
import { Button } from '../Button';
import { ThemeContext } from './ThemeContext';
import { RiSunLine } from 'react-icons/ri';
import { THEMES } from '../../constants';
import { altTheme, darkTheme } from '../../stitches.config';

type Props = {
  children?: object | string;
};

export const ThemeToggle = ({ children = <RiSunLine /> }: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    switch (theme) {
      case THEMES.ALT_THEME:
      case altTheme:
        setTheme(darkTheme);
        break;

      case darkTheme:
      case THEMES.DARK_THEME:
        setTheme(THEMES.DEFAULT_THEME);
        break;

      case THEMES.DEFAULT_THEME:
        setTheme(altTheme);
        break;

      default:
        setTheme(THEMES.DEFAULT_THEME);
        break;
    }
  };

  return (
    <Button
      size='1'
      type='ghost'
      shape='dull'
      color='base'
      css={{
        backgroundColor: 'transparent',
        py: '$2',
        ml: '$2',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '$appBg2',
        },
      }}
      onClick={handleThemeChange}
    >
      {children}
    </Button>
  );
};
