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
import styles from './register.style';
import {View} from 'native-base';
import {
  Keyboard,
  Alert,
  Text,
  StatusBar,
  ImageBackground,
  AsyncStorage,
} from 'react-native';

/**
 * Authentication container conponent
 *
 * @extends {React.Component}
 */
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nik: '',
      password2: '',
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
  initSignIn(client) {
    let data = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      passwordcf: this.state.password2,
      nik: this.state.password,
      email: this.state.email ? this.state.email : '',
    });

    // console.log('Di Submit', this.state, data);

    fetch('http://192.168.1.9/B7TPMAPI/apis/users/register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('Response Json', responseJson);
        if (responseJson.code !== 200) {
          Alert.alert('Action Failed', responseJson.message);
        } else {
          Alert.alert('Succes', 'Signup Success.');
          this.props.navigation.navigate('Auth');
        }
        return;
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Invalid Verification Code', error);
        return;
      });
  }

  render() {
    return this.state.loading === true ? (
      <Loading />
    ) : (
      <ImageBackground
        source={Images.image_background}
        style={styles.background}>
        <Wrapper style={styles.wrapper}>
          {/* <StatusBar hidden={true} /> */}
          <Content style={styles.content}>
            <TextBox
              name="user"
              placeholder="User Name"
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <TextBox
              name="nik"
              placeholder="NIK"
              value={this.state.nik}
              onChangeText={text => this.setState({nik: text})}
            />
            <TextBox
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <TextBox
              name="pass"
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <TextBox
              name="pass2"
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={this.state.password2}
              onChangeText={text => this.setState({password2: text})}
            />
            {/* <Text onPress={() => console.log('1st')}>Dengan ini saya menyatakan bahwa data {'\n'} yang saya masukkan telah benar</Text> */}
            <View style={styles.buttonSubmitContainer}>
              <Button
                title="Daftar Sekarang"
                containerStyle={styles.enterOTPButton}
                textStyle={styles.textButtonSubmit}
                // containerStyle={styles.enterButton}
                onPress={() => this.initSignIn()}
                //loading={this.state.enableLogin}
              />
            </View>
            {/* <View style={styles.buttonSubmitContainer}>
              <Button
                title="Sudah punya akun? Login"
                containerStyle={styles.enterOTPButton}
                textStyle={styles.textButtonSubmit}
                // containerStyle={styles.enterButton}
                onPress={() => this.initSignIn()}
                //loading={this.state.enableLogin}
              />
            </View> */}
          </Content>
          <Footer style={styles.footer}>
            <Text style={styles.text}>Version: 0.0.1</Text>
          </Footer>
        </Wrapper>
      </ImageBackground>
    );
  }
}

export default Register;
