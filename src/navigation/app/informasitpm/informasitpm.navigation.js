import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton, LogoutButton} from '../../../components';
import {InformasiTPM} from '../../../containers';
import styles from './informasitpm.navigation.style';

const InformasiTPMScreen = props => (
  <InformasiTPM {...props} screenProps="current" />
);

const RootStack = createStackNavigator(
  {
    TPMWhiteList: {
      screen: InformasiTPMScreen,
      name: 'app.screen.informasitpm',
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
