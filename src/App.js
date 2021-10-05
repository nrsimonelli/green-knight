import React, { useState } from 'react';

import { Button } from './components/Button';
import {
  darkTheme,
  theme as baseTheme,
  styled,
} from './stitches.config';

const Root = styled('div', {
  backgroundColor: '$base1',
  color: '$base12',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const App = () => {
  const [newTheme, setNewTheme] = useState(false);
  const changeTheme = () => {
    setNewTheme(!newTheme);
  };
  return (
    <Root
      className={newTheme ? darkTheme.className : baseTheme.className}
    >
      <div>hello friend</div>
      <Button>Button</Button>
      <Button onClick={changeTheme}>Button</Button>
    </Root>
  );
};

export default App;
