import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton} from '../../../components';
import {AdministrasiForm} from '../../../containers';
import styles from './administrasiform.style';

const AdministrasiFormScreen = props => (
  <AdministrasiForm {...props} screenProps="current" />
);

const RootStack = createStackNavigator(
  {
    AdministrasiForm: {
      screen: AdministrasiFormScreen,
      name: 'app.screen.administrasiform',
      navigationOptions: ({navigation}) => ({
        headerTitle: <HeaderTitle text="Administrasi Form" />,
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
