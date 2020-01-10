// __tests__/Intro-test.js
import React from 'react';
import FeedListItem from './FeedListItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<FeedListItem />).toJSON();
    expect(tree).toMatchSnapshot();
});