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
    padding: 40,
    marginTop:10
  },
  text: {
    fontSize: 11,
    color: '#000',
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
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
  },
  buttonSubmitContainer: {
    width: '100%',
  },
  textButtonSubmit: {
    color: '#64a787',
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
