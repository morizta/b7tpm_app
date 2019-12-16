import {StyleSheet} from 'react-native';

import {Colors} from '../../../styles';

export default StyleSheet.create({
  header: {
    backgroundColor: '#2a7050',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  tabBar: {
    backgroundColor: Colors.SubHeader,
  },
});
