// @flow
import type { State } from '../..';

export const list = (state: State) => state.feed.list;
export const loading = (state: State) => state.feed.loading;
export const error = (state: State) => state.feed.error;
export const after = (state: State) => state.feed.after;
export const before = (state: State) => state.feed.before;
