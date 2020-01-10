// @flow
import type { Feed } from 'store/ducks/feed/reducer';

export default function mapFeedFromRedditApi(feed: Object): Feed {
  const { data } = feed;
  return {
    id: data.id,
    authorFullname: data.authorFullname,
    author: data.author,
    created: data.created,
    downs: data.downs,
    numComments: data.numComments,
    subredditId: data.subredditId,
    subredditNamePrefixed: data.subredditNamePrefixed,
    subreddit: data.subreddit,
    thumbnail: data.thumbnail.includes('http') ? data.thumbnail : null,
    title: data.title,
    totalAwardsReceived: data.totalAwardsReceived,
    ups: data.ups,
    url: data.url,
  };
}
