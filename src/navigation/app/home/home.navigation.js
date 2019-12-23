import React from 'react';
// import {
//   createStackNavigator,
// } from 'react-navigation'

import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';

import {AsyncStorage, Alert} from 'react-native';
import {HeaderTitle, DrawerButton, LogoutButton} from '../../../components';
import {Home} from '../../../containers';

import styles from './home.navigation.style';

const HomeScreen = props => <Home {...props} screenProps="current" />;

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      name: 'app.screen.home',
      navigationOptions: ({navigation}) => ({
        // headerLeft: <DrawerButton navigation={navigation} />,
        headerRight: <LogoutButton navigation={navigation} />,
      }),
    },
  },
  {
    navigationOptions: {
      //headerBackground: <HeaderBackground image={Images.header} />,
      headerStyle: styles.header,
      //headerRight: <View />
    },
  },
);

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
