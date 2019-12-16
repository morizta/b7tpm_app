import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menuItem: {
    paddingTop: 2,
    marginLeft: 10,
    height: 25,
    fontSize: 14,
    //borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  ratingImage: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  listItem: {},
});
