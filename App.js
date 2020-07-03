/**
 * Forms
 * App
 * @author-Rahul
 * @modify date 2020-05-06 16:18:36
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import Root from './src/root/RootContainer';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = Store();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={localStyles.container}>
            <Root />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});