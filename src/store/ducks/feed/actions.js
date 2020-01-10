// @flow
import type { Action, Dispatch } from '../..';
import type { Feed } from './reducer';

import * as types from './types';

import { getPopularFeed, getNextPopularFeed } from '../../../services/reddit-api';

import mapFeedFromRedditApi from 'utils/mapFeedFromRedditApi';

export const requestFeed = (): Action => ({
  type: types.SET_FEED_REQUEST,
});

export const setFeedSuccess = (feed: Feed): Action => ({
  type: types.SET_FEED_SUCCESS,
  payload: feed,
});

export const setMoreFeedSuccess = (feed: Feed): Action => ({
  type: types.SET_MORE_FEED_SUCCESS,
  payload: feed,
});

export const setFeedFailed = (error: string): Action => ({
  type: types.SET_FEED_FAILED,
  payload: error,
});

export const fetchRedditFeed = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestFeed());

    const response = await getPopularFeed();
    const { after, before } = response.data.data;
    const allFeed = response.data.data.children.map(mapFeedFromRedditApi);
    dispatch(setFeedSuccess({ allFeed, after, before }));
  } catch (error) {
    dispatch(setFeedFailed(error.message));
  }
};

export const fetchMoreRedditFeed = (nextPage) => async (dispatch: Dispatch) => {

  try {
    dispatch(requestFeed());

    const response = await getNextPopularFeed(nextPage);
    const { after, before } = response.data.data;
    const allFeed = response.data.data.children.map(mapFeedFromRedditApi);

    dispatch(setMoreFeedSuccess({ allFeed, after, before }));
  } catch (error) {
    dispatch(setFeedFailed(error.message));
  }
};
