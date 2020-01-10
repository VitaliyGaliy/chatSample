// @flow
import React from 'react';
import { StatusBar as NativeStatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import {
  theme as currentTheme,
  isDarkTheme,
} from 'store/ducks/settings/selectors';

import { Themes } from 'constants/Themes';

function StatusBar() {
  const theme = useSelector(currentTheme);
  const isDark = useSelector(isDarkTheme);

  const barStyle = isDark ? 'light-content' : 'dark-content';
  const backgroundColor = Themes[theme].primary;

  return (
    <NativeStatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
  );
}

export default StatusBar;
