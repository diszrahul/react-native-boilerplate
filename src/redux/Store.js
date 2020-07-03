/**
 * @author Rahul Rajput
 * @email rahul@jigsaw.xyz
 * @create date 2020-05-06 09:56:18
 * @modify date 2020-05-06 09:56:18
 * @desc [One store to rule them all]
 */

import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import reducers from './RootReducer';

const composeEnhancers = compose

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['dataReducer'],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const persistedReducer = persistReducer(persistConfig, reducers);
// Connect our store to the reducers

export default () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, logger)));
  let persistor = persistStore(store);
  return {store, persistor};
};
// export default createStore(reducers);
