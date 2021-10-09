import React, { createContext, useEffect, FC, useState } from 'react';
import { altTheme } from '../../stitches.config';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    if (userMedia.matches) {
      // default is dark
      return 'default-theme';
    }
  }
  return altTheme.className;
};

export type ThemeContent = {
  theme: string;
  setTheme: (c: string) => void;
};

export type ProviderContent = {
  initialTheme: string | undefined;
};

export const ThemeContext = createContext<ThemeContent>({
  theme: getInitialTheme(),
  setTheme: () => {},
});

export const ThemeProvider: FC<ProviderContent> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const isDefault = rawTheme === 'default-theme';

    document.body.classList.remove(
      isDefault ? 'default-theme' : altTheme.className
    );
    document.body.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
