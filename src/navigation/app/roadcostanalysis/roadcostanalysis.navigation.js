import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HeaderTitle, DrawerButton} from '../../../components';
import {RoadCostAnalysis} from '../../../containers';
import styles from './roadcostanalysis.style';

const RoadCostAnalysisScreen = props => (
  <RoadCostAnalysis {...props} screenProps="current" />
);

const RootStack = createStackNavigator(
  {
    RoadCostAnalysis: {
      screen: RoadCostAnalysisScreen,
      name: 'app.screen.roadcostanalysis',
      navigationOptions: ({navigation}) => ({
        headerTitle: <HeaderTitle text="Road Cost Analysis Form" />,
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
