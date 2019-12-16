import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  icon: {
    color: 'white',
    paddingLeft: 1,
  },
  drawer: {
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    //marginLeft: 30,
    width: '100%',
  },
  rightButton: {
    height: 25,
    backgroundColor: '#2a7050',
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerContentDetailText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
});
