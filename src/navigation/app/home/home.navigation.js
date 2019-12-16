import React from 'react';
// import {
//   createStackNavigator,
// } from 'react-navigation'

import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';

import {HeaderTitle, DrawerButton} from '../../../components';
import {Home} from '../../../containers';

import styles from './home.navigation.style';

const HomeScreen = props => <Home {...props} screenProps="current" />;

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      name: 'app.screen.home',
      navigationOptions: ({navigation}) => ({
        // headerTitle: <HeaderTitle text="B7TPM Application" />,
        // headerLeft: <DrawerButton navigation={navigation} />,
        // headerLeft: <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
        //   <MenuImage style='styles.bar' navigation={navigation}/>
        // </TouchableOpacity>
        // headerRight: <NavBarNotificationIcon onPress={() => navigation.navigate('Notification')} />
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
