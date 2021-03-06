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
    marginBottom: 25,
    marginRight: 15,
    marginLeft: 15,
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
    marginTop: 10,
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
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'center',
    borderColor: '#fff',
    borderRadius: 2,
    borderWidth: 1,
  },
  buttonSubmitContainer: {
    marginBottom: 15,
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    paddingRight: 20,
  },
  checkboxtTitle: {
    marginLeft: 20,
    color: '#fff',
    textAlign: 'justify',
  },
});
