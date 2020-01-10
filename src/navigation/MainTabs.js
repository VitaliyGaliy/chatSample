import React from 'react';
import { createAppContainer } from 'react-navigation';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import i18next from 'i18next';

import FeedScreen from '../screens/Feed/Feed.container';
import ChatScreen from '../screens/Chat/Chat.container';
import SettingsScreen from '../screens/Settings/Settings.container';


export const BottomNavigationShowcase = (props) => {


  const onTabSelect = (selectedIndex) => {
    const { [selectedIndex]: selectedRoute } = props.navigation.state.routes;
    props.navigation.navigate(selectedRoute.routeName);
  };

  return (
    <BottomNavigation
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}>
      <BottomNavigationTab title={i18next.t('tabs:feed')} />
      <BottomNavigationTab title={i18next.t('tabs:chat')} />
      <BottomNavigationTab title={i18next.t('tabs:settings')} />
    </BottomNavigation>
  );
}

export const BottomTabNavigator = createBottomTabNavigator({
  Feed: FeedScreen,
  Chat: ChatScreen,
  Settings: SettingsScreen,
}, {
  initialRouteName: 'Settings',
  tabBarComponent: BottomNavigationShowcase,
});

export default createAppContainer(BottomTabNavigator);