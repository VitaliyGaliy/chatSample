// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Layout, List, Spinner, withStyles } from 'react-native-ui-kitten';

import FeedListItem from 'components/FeedListItem';

import type { Feed } from 'store/ducks/feed/reducer';

type Props = {
  list: Array<Feed>,
  loading: boolean,
  iconColor: string,
  fetchRedditFeed: Function,
  setMoreFeedSuccess: Function,
};

class FeedScreen extends Component<Props> {
  componentDidMount() {
    const { fetchRedditFeed } = this.props;
    fetchRedditFeed();
  }

  loadMoreFeed = () => {
    const { fetchMoreRedditFeed, after, loading } = this.props;
    if (!loading) {
      fetchMoreRedditFeed(after)
    }
  }

  renderItem = ({ item }: { item: Feed }, iconColor: iconColor) => {
    return (

      <FeedListItem
        title={`/${item.subredditNamePrefixed}`}
        description={item.title}
        ups={item.ups}
        numComments={item.numComments}
        thumbnail={item.thumbnail}
        mainTheme={this.props.mainTheme}
        iconColor={iconColor}
      />
    )
  };

  renderSpinner = () => {
    const { loading } = this.props;

    if (loading) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      );
    }

    return null;
  };

  render() {
    const { list, mainTheme, theme } = this.props;
    const iconColor = mainTheme === 'light' ? theme['color-basic-800'] : theme['color-basic-100']


    return (
      <Layout style={styles.container}>
        <List
          style={styles.list}
          data={list}
          renderItem={(item) => this.renderItem(item, iconColor)}
          ListFooterComponent={this.renderSpinner}
          onEndReached={() => this.loadMoreFeed()}
          onEndReachedThreshold={0.1}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  spinnerContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default withStyles(FeedScreen);