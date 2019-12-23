import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

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
    justifyContent: 'space-between',
    marginBottom: 5,
    //marginLeft: 30,
    width: '100%',
    // backgroundColor: 'blue',
  },
  rightButton: {
    height: 25,
    backgroundColor: Colors.Turtoise, //'#2a7050',
    width: 100,
    alignSelf: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  leftButton: {
    height: 25,
    backgroundColor: Colors.Turtoise, //'#2a7050',
    width: 100,
    alignSelf: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  headerContentDetailText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
  },
});
