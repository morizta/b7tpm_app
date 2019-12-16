import {StyleSheet} from 'react-native';
// import DeviceInfo from 'react-native-device-info'

export default StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#64a787',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    textAlign: 'right',
    padding: 10,
  },
  profileTitle: {
    marginTop: 50,
    fontSize: 11,
    fontWeight: '300',
    color: 'white',
  },
  phoneNumber: {
    fontSize: 11,
    fontWeight: '800',
    color: 'white',
  },
  content: {
    justifyContent: 'center',
    marginBottom: 100,
    marginRight: 30,
    marginLeft: 30,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    // bottom: DeviceInfo.hasNotch() ? 15 : 0,
  },
  wrapper: {
    backgroundColor: 'transparent',
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingTop: 10,
  },
  text: {
    fontSize: 11,
    color: '#fff',
  },
  enterButton: {
    alignSelf: 'flex-end',
  },
  backButton: {
    // alignSelf: 'flex-end',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderRadius: 2,
    borderWidth: 0.5,
    width: 150,
  },
  textContainer: {
    alignSelf: 'center',
    // marginTop:200
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 100,
    width: '100%',
  },
  enterOTPButton: {
    width: '100%',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginRight: 0,
    marginLeft: 0,
    height: 50,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#fff',
    resizeMode: 'contain',
  },
  buttonSubmitContainer: {
    marginTop: 30,
    width: '100%',
  },
  textButtonSubmit: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '300',
  },
  textInfoStyle: {
    fontSize: 11,
    color: '#fff',
    textAlign: 'center',
  },
  textMiddle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    // marginBottom:1,
    // marginTop:1
  },
});
