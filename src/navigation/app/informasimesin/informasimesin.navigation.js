import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton, LogoutButton} from '../../../components';
import {InformasiMesin} from '../../../containers';
import styles from './informasimesin.navigation.style';

const InformasiMesinScreen = props => (
  <InformasiMesin {...props} screenProps="current" />
);

const RootStack = createStackNavigator(
  {
    TPMWhiteList: {
      screen: InformasiMesinScreen,
      name: 'app.screen.informasimesin',
      navigationOptions: ({navigation}) => ({
        headerRight: <LogoutButton navigation={navigation} />,
        headerTitle: <HeaderTitle text="Informasi Mesin" />,
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
