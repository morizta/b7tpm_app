import {StyleSheet} from 'react-native';

import {Colors, Fonts, Spacing} from '../../styles';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    color: Colors.Turtoise,
    // textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: Fonts.Large,
    fontWeight: '500',
    flex: 1,
    // paddingRight: 30,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'center',
    alignSelf: 'center',
    paddingRight: Spacing.DefaultPadding * 2,
  },
});
