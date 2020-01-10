// @flow
import React from 'react';
import { ApplicationProvider as ThemeProvider } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';
import { useSelector } from 'react-redux';

import { theme as themeSelector } from 'store/ducks/settings/selectors';

const themes = { light, dark };

type Props = {
  children: React$Node,
};

const ThemeConnectedProvider = ({ children }: Props) => {
  const themeStyle = useSelector(themeSelector);

  return (
    <ThemeProvider mapping={mapping} theme={themes[themeStyle]}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeConnectedProvider;
