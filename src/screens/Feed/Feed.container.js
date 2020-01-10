import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchRedditFeed, fetchMoreRedditFeed } from 'store/ducks/feed/actions';
import { list, loading, after, before } from 'store/ducks/feed/selectors';
import { theme } from 'store/ducks/settings/selectors';
import Feed from './Feed';

const mapStateToProps = createStructuredSelector({
  list,
  loading,
  after,
  before,
  mainTheme: theme
});

const mapDispatchToProps = {
  fetchRedditFeed,
  fetchMoreRedditFeed
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
