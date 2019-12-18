// /**
//  * @format
//  */

import {AppRegistry} from 'react-native';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import React from 'react';
import {name as appName} from './app.json';
import RootNavigation from './src/navigation';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const Application = () => (
  <Provider store={store}>
    <RootNavigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application);
