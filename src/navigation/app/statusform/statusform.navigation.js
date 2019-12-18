import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton, LogoutButton} from '../../../components';
import {StatusForm} from '../../../containers';
import styles from './statusform.style';

const StatusFormScreen = props => (
  <StatusForm {...props} screenProps="current" />
);

const RootStack = createStackNavigator(
  {
    StatusForm: {
      screen: StatusFormScreen,
      name: 'app.screen.statusform',
      navigationOptions: ({navigation}) => ({
        headerTitle: <HeaderTitle text="Status Form" />,
        headerRight: <LogoutButton navigation={navigation} />,
        headerLeft: <DrawerButton navigation={navigation} />,
      }),
    },
  },
  {
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
