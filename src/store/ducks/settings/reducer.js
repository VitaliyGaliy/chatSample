// @flow
import { ThemeStyle } from 'constants/Themes';
import type { Theme } from 'constants/Themes';

import type { Action } from '../..';

import * as types from './types';

export type State = {
  theme: Theme,
};

export const initialState: State = {
  theme: ThemeStyle.light,
};

export default function settings(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case types.SET_SETTINGS_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
