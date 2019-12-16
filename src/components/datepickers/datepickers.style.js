import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
  },
  textView: {
    flexDirection: 'row',
  },
  textLabel: {
    color: '#9c9c9c',
    // flexDirection: 'row',
  },
  error: {
    color: 'tomato',
  },
  icon: {
    padding: 10,
  },
});
