import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import HomeStack from './home';
import AdministrasiFormStack from './administrasiform';
import TPMFormStack from './tpmform';
import TPMRedListStack from './tpmredlist';
import TPMWhiteListStack from './tmpwhitelist';
import StatusFormStack from './statusform';
import RoadCostAnalysisStack from './roadcostanalysis';

const RootScreen = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
      name: 'app.screen.home',
    },
    AdministrasiForm: {
      screen: AdministrasiFormStack,
      name: 'app.screen.administrasiform',
    },
    TPMForm: {
      screen: TPMFormStack,
      name: 'app.screen.tpmform',
    },
    StatusForm: {
      screen: StatusFormStack,
      name: 'app.screen.statusform',
    },
    TPMRedList: {
      screen: TPMRedListStack,
      name: 'app.screen.home',
    },
    TPMWhiteList: {
      screen: TPMWhiteListStack,
      name: 'app.screen.home',
    },
    RoadCostAnalysis: {
      screen: RoadCostAnalysisStack,
      name: 'app.screen.roadcostanalysis',
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(RootScreen);

// Now AppContainer is the main component for React to render
export default AppContainer;
