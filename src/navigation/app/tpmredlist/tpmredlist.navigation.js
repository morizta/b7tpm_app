import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton} from '../../../components';
import {TPMRedList} from '../../../containers';
import styles from './tpmredlist.navigation.style';

const TPMRedListScreen = props => (
  <TPMRedList {...props} screenProps="current" />
);

const RootStack = createStackNavigator(
  {
    TPMRedList: {
      screen: TPMRedListScreen,
      name: 'app.screen.tpmredlist',
      navigationOptions: ({navigation}) => ({
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
