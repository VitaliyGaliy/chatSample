// @flow
import React from 'react';
import { StyleSheet } from 'react-native';

import { Icon, Layout, ListItem, Text } from 'react-native-ui-kitten';

import Styles from 'constants/Styles';

type Props = {
  title: string,
  description: string,
  ups: number,
  numComments: number,
  iconColor: string
};

export default function FeedListItem({
  title,
  description,
  ups,
  numComments,
  iconColor
}: Props) {
  return (
    <Layout style={styles.container}>
      <ListItem title={title} description={description} />
      <Layout style={styles.icons}>
        <Icon name="arrow-circle-up-outline" width="20" height="20" fill={iconColor} />
        <Text category="p1">{ups}</Text>
        <Icon name="message-circle-outline" width="20" height="20" fill={iconColor} />
        <Text category="p1">{numComments}</Text>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Styles.smallPadding,
    paddingBottom: Styles.smallPadding,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
