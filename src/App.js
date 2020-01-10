// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as StoreProvider } from 'react-redux';
import { IconRegistry } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import ThemeConnectedProvider from './ThemeConnectedProvider';

import StatusBar from 'components/StatusBar';

import MainTabs from './navigation/MainTabs';

import { store, persistor } from 'store';
import './I18n';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeConnectedProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <MainTabs />
          </SafeAreaView>
        </ThemeConnectedProvider>
      </PersistGate>
    </StoreProvider>
  </>
);

export default App;
