import {createSwitchNavigator} from 'react-navigation';

// import App from './app';
import Auth from './auth';
import App from './app';
import {createAppContainer} from 'react-navigation';

const RootNavigation = createSwitchNavigator(
  {
    App,
    Auth,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(RootNavigation);

export default AppContainer;
