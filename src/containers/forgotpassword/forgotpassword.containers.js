/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import axios from 'axios';

import {api_endpoint} from '../../../config';
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
import styles from './forgotpassword.style';
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
// import AsyncStorage from '@react-native-community/async-storage';

/**
 * Authentication container conponent
 *
 * @extends {React.Component}
 */
class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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

  initSendPassword(client) {
    // console.log('Di Submit', this.state);
    // axios
    //   .post(
    //     `${api_endpoint}users/login.php`,
    //     JSON.stringify({
    //       username: this.state.username,
    //       password: this.state.password,
    //     }),
    //   )
    //   .then(response => {
    //     console.log(response);
    //     const empString = JSON.stringify(response.data.data);
    //     AsyncStorage.setItem('auth', empString);
    //     this.props.updateUser(response.data.data);
    //     this.setState({
    //       user: empString,
    //     });
    //     this.props.navigation.navigate('App');
    //   })
    //   .catch(err => {
    //     console.log(err);
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
            <Text style={{color: '#fff'}}>
              Untuk mendapatkan password anda, masukkan alamat email yang
              tehubung dengan akun anda.
            </Text>
            <TextBox
              name="mail"
              icon="at"
              placeholder="Email"
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Text style={{color: '#fff'}}>
              * password akan dikirim ke alamat email anda
            </Text>
            <View style={styles.buttonSubmitContainer}>
              <Button
                title="Kirim"
                containerStyle={styles.enterOTPButton}
                textStyle={styles.textButtonSubmit}
                onPress={() => console.log('Di Kirim')}
              />
            </View>
            <View style={styles.buttonSubmitContainer}>
              <Button
                title="Sudah punya akun? Login"
                containerStyle={styles.enterOTPButton}
                textStyle={styles.textButtonSubmit}
                onPress={() => this.props.navigation.navigate('Auth')}
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

export default ForgotPassword;
