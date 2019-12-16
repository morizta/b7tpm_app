/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Logo,
  Button,
  Header,
  Footer,
  Content,
  Loading,
  Wrapper,
  TextBox,
} from '../../components';
import {Images} from '../../../assets';
import styles from './authentication.style';
import {View} from 'native-base';
import {
  Keyboard,
  Alert,
  Text,
  StatusBar,
  ImageBackground,
  // AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * Authentication container conponent
 *
 * @extends {React.Component}
 */
class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      isModalVisible: true,
      isLoading: false,
    };
  }
  /**
   * Render Authentication screen
   *
   * @returns {JSX} Authentication screen component tree
   */

  gotoForgetPassword(client) {
    this.props.navigation.navigate('App');
  }

  gotoRegister(client) {
    this.props.navigation.navigate('Register');
  }

  initSignIn(client) {
    console.log('Di Submit', this.state);

    this.props.navigation.navigate('Home');
    // fetch('http://192.168.1.9/B7TPMAPI/apis/users/login.php', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log('Response Json', responseJson);
    //     if (responseJson.message === 'User not available') {
    //       Alert.alert('Login failed', 'User not found.');
    //     } else {
    //       // this.props.navigation.navigate('Home');
    //       console.log('responseJson', responseJson.data[0]);
    //       AsyncStorage.setItem('auth', JSON.stringify(responseJson.data[0]));
    //       const auth = AsyncStorage.getItem('auth');
    //       console.log('Isi Session Auth', auth);
    //       //save session goto home menu
    //     }
    //     return;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     Alert.alert('Invalid Verification Code', error);
    //     return;
    //   });
  }

  render() {
    return this.state.loading === true ? (
      <Loading />
    ) : (
      <ImageBackground
        source={Images.image_background}
        style={styles.background}>
        <Wrapper style={styles.wrapper}>
          <Header style={styles.logo}>
            <Logo
              text={'B7 Engineering app by Dimas Aji'}
              image={Images.logo_bintangtoedjoe}
            />
          </Header>
          {/* <StatusBar hidden={true} /> */}
          <Content style={styles.content}>
            <TextBox
              name="user"
              icon="user"
              placeholder="User Name"
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <TextBox
              name="pass"
              icon="at"
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <TouchableOpacity>
              <Text style={{color: '#fff'}} onPress={() => console.log('1st')}>
                Forgot Password?
              </Text>
              <Text style={{color: '#fff'}} onPress={() => this.gotoRegister()}>
                Sign Up?
              </Text>
            </TouchableOpacity>
            <View style={styles.buttonSubmitContainer}>
              <Button
                title="Log In"
                containerStyle={styles.enterOTPButton}
                textStyle={styles.textButtonSubmit}
                // containerStyle={styles.enterButton}
                onPress={() => this.initSignIn()}
                //loading={this.state.enableLogin}
              />
            </View>
          </Content>
          <Footer style={styles.footer}>
            <Text style={styles.text}>Version: 0.0.1</Text>
          </Footer>
        </Wrapper>
      </ImageBackground>
    );
  }
}

export default Authentication;
