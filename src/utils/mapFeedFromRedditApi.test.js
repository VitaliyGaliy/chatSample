import mapFeedFromRedditApi from "./mapFeedFromRedditApi";
import feedResponse from "../../__mocks__/feedResponse";

test('should return correct feed object', () => {
    const wholeFeed = feedResponse.data.children[1]
    const feed = mapFeedFromRedditApi(wholeFeed)
    expect(typeof feed).toBe('object');
})