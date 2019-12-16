import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton} from '../../../components';
import {TPMForm} from '../../../containers';
import styles from './tpmform.style';

const TPMFormScreen = props => <TPMForm {...props} screenProps="current" />;

const RootStack = createStackNavigator(
  {
    TPMForm: {
      screen: TPMFormScreen,
      name: 'app.screen.tpmorm',
      navigationOptions: ({navigation}) => ({
        headerTitle: <HeaderTitle text="TPM Form" />,
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
