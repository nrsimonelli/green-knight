import React, { useContext } from 'react';
import { Button } from '../components/Button';
import { altTheme } from '../stitches.config';
import { ThemeContext } from './ThemeContext';

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Button
      onClick={() =>
        setTheme(
          theme === altTheme.className
            ? 'theme-default'
            : altTheme.className
        )
      }
    >
      Toggle
    </Button>
  );
};
