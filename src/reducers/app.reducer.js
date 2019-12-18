import {TEST_BUILD, CONFIG_TYPE} from 'react-native-dotenv';

import {version} from '../../package';
//import { APP_ACTION } from '../actions'

const defaultState = {
  version,
  testBuild: TEST_BUILD,
  configType: CONFIG_TYPE,
};

export default (state = defaultState) => {
  //ios:state5
  //console.log(state)
  return state;
};
