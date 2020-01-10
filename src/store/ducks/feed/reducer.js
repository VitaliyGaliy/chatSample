// @flow
import type { Action } from '../..';

import * as types from './types';

export type Feed = {
  id: string,
  authorFullname: string,
  author: string,
  created: number,
  downs: number,
  numComments: number,
  subredditId: string,
  subredditNamePrefixed: string,
  subreddit: string,
  thumbnail?: ?string,
  title: string,
  totalAwardsReceived: number,
  ups: number,
  url: string,
};

export type State = {
  list: Array<Feed>,
  loading: boolean,
  error: ?string,
  after: string,
  before: string
};

export const initialState: State = {
  list: [],
  loading: true,
  error: null,
  after: null,
  before: null
};

export default function feed(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case types.SET_FEED_REQUEST:
      return { ...state, loading: true };
    case types.SET_FEED_SUCCESS: {
      const { allFeed, after, before } = action.payload

      return { ...state, list: allFeed, after, before, loading: false };
    }
    case types.SET_MORE_FEED_SUCCESS: {
      const { allFeed, after, before } = action.payload

      return {
        ...state, list: [...state.list, ...allFeed], after, before, loading: false
      };
    }
    case types.SET_FEED_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
