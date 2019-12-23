import {StyleSheet, Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info'

import {Fonts, Colors, Spacing} from '../../styles';

export default StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'black',
    height: 150,
  },
  logoText: {
    textAlign: 'right',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  content: {
    backgroundColor: Colors.Background,
    padding: Spacing.DoublePadding,
  },
  statusBar: {
    backgroundColor: '#2a7050',
  },
  profileContainer: {
    marginTop: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '92%',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  profileContainerBox: {
    flexDirection: 'row',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-between',
  },
  profileHeader: {
    marginTop: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 70,
    flex: 1,
    //borderRadius: 10,
    backgroundColor: '#2a7050',
    elevation: 2,
  },
  menuScrollView: {
    // marginBottom: 180,
    // backgroundColor: 'red',
  },
  footerText: {
    color: 'white',
    textAlign: 'right',
    textAlignVertical: 'center',
    width: '50%',
    // paddingRight: DeviceInfo.hasNotch() ? 20 : 5,
    fontSize: 10,
    paddingTop: Platform.OS == 'ios' ? 5 : 0,
  },
  versionText: {
    color: 'white',
    textAlign: 'left',
    textAlignVertical: 'center',
    width: '50%',
    // paddingLeft: DeviceInfo.hasNotch() ? 20 : 5,
    fontSize: 10,
    paddingTop: Platform.OS == 'ios' ? 5 : 0,
  },
  profileInfoContainer: {
    marginTop: -30,
    marginLeft: 10,
    height: 25,
  },
  profileInfoItem: {
    borderBottomWidth: 0,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1919',
  },
  profileTitle: {
    fontSize: Fonts.Medium,
    fontWeight: '300',
    color: '#1a1919',
  },
  profileImage: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
    //resizeMode: 'stretch'
  },
  menuContainerBox: {
    // marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
    height: 450,
  },
  menuItem: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: '4%',
    width: '35%',
  },
  menuTitle: {
    fontSize: Fonts.Medium,
    fontWeight: '500',
    color: '#1a1919',
    textAlign: 'center',
    paddingRight: '4%',
  },
  menuTitleLog: {
    fontSize: Fonts.Medium,
    fontWeight: '500',
    color: '#1a1919',
    textAlign: 'center',
    marginLeft: -10,
  },
  menuImage: {
    height: 110,
    width: 110,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
});

export const headerStyles = {
  headerStyle: {
    backgroundColor: Colors.Primary,
  },
};
