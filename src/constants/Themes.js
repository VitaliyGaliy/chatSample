// @flow
import Colors from './Colors';

export type Theme = 'light' | 'dark';

export const ThemeStyle = {
  light: 'light',
  dark: 'dark',
};

export const Themes = {
  light: {
    primary: Colors.light,
  },
  dark: {
    primary: Colors.dark,
  },
};
