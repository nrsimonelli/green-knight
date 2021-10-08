import React, { useContext } from 'react';
import { Button } from '../components/Button';
import { altTheme } from '../stitches.config';
import { ThemeContext } from './ThemeContext';
import {
  RiMoonClearLine,
  RiSafariFill,
  RiSunCloudyLine,
  RiSunLine,
} from 'react-icons/ri';

export const ThemeToggle = ({
  size = '1',
  color = 'primary',
  type = 'ghost',
  shape = 'dull',
  children = <RiSunLine />,
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      size={size}
      color={color}
      type={type}
      shape={shape}
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
