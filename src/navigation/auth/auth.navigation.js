import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import {Authentication, Register} from '../../containers';

const RootStack = createStackNavigator(
  {
    Auth: {
      screen: Authentication,
      name: 'auth.screen.authentication',
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Register: {
      screen: Register,
      name: 'auth.screen.register',
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
