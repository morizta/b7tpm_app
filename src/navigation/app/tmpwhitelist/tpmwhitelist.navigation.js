import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton, LogoutButton} from '../../../components';
import {TPMWhiteList} from '../../../containers';
import styles from './tpmwhitelist.navigation.style';

const TPMWhiteListScreen = props => (
  <TPMWhiteList {...props} screenProps="current" />
);

const RootStack = createStackNavigator(
  {
    TPMWhiteList: {
      screen: TPMWhiteListScreen,
      name: 'app.screen.tpmwhitelist',
      navigationOptions: ({navigation}) => ({
        headerRight: <LogoutButton navigation={navigation} />,
        headerTitle: <HeaderTitle text="TPM Red Tag List" />,
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
