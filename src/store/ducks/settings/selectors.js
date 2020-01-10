// @flow
import { createSelector } from 'reselect';

import { ThemeStyle } from 'constants/Themes';

import type { State } from '../..';

export const theme = (state: State) => state.settings.theme;

export const isDarkTheme = createSelector(
  [theme],
  currentTheme => currentTheme === ThemeStyle.dark,
);
