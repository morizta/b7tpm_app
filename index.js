// /**
//  * @format
//  */

// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import RootNavigation from './src/navigation';

const Application = () => <RootNavigation />;

AppRegistry.registerComponent(appName, () => Application);
