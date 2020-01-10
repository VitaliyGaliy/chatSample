// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, ListItem, Toggle } from 'react-native-ui-kitten';

import { ThemeStyle } from 'constants/Themes';
import type { Theme } from 'constants/Themes';

type Props = {
  theme: Theme,
  setTheme: Function,
};

export default function SettingsScreen({ theme, setTheme }: Props) {
  const isDark = theme === ThemeStyle.dark;

  function onToggleTheme() {
    setTheme(isDark ? ThemeStyle.light : ThemeStyle.dark);
  }

  return (
    <Layout style={styles.container}>
      <ListItem
        title="Theme"
        accessory={style => (
          <Toggle
            {...style}
            text={isDark ? 'Dark' : 'Light'}
            checked={isDark}
            onChange={onToggleTheme}
          />
        )}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
