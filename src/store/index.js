// @flow
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import createStore from './createStore';

import reducers from './ducks';

import type { State as FeedState } from './ducks/feed/reducer';
import type { State as SettingsState } from './ducks/settings/reducer';

export type State = {
  feed: FeedState,
  settings: SettingsState,
};

export type Action = {
  type: string,
  payload?: any,
};

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction) => any;
export type GetState = () => State;


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settings']
}

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }
