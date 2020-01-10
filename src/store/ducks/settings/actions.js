// @flow
import type { Theme } from 'constants/Themes';

import type { Action } from '../..';

import * as types from './types';

export const setTheme = (theme: Theme): Action => ({
  type: types.SET_SETTINGS_THEME,
  payload: theme,
});
