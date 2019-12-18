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

// import {CheckBox} from 'react-native-elements';
import {Images} from '../../../assets';
import styles from './register.style';
import {View, CheckBox} from 'native-base';
import {
  Keyboard,
  Alert,
  Text,
  StatusBar,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
      checkedbox: false,
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

  _checkbox() {
    if (this.state.checkedbox === true) {
      this.setState({checkedbox: false});
    } else {
      this.setState({checkedbox: true});
    }
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
              icon="user"
              placeholder="User Name"
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <TextBox
              name="nik"
              icon="archive"
              placeholder="NIK"
              value={this.state.nik}
              onChangeText={text => this.setState({nik: text})}
            />
            <TextBox
              name="email"
              icon="at"
              placeholder="Email"
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <TextBox
              name="pass"
              icon="unlock-alt"
              placeholder="Password"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <TextBox
              name="pass2"
              icon="unlock-alt"
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={this.state.password2}
              onChangeText={text => this.setState({password2: text})}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                center
                title="Click Here"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={() => this._checkbox()}
                checked={this.state.checkedbox}
              />
              <TouchableOpacity>
                <Text
                  style={styles.checkboxtTitle}
                  onPress={() => this._checkbox()}>
                  Dengan ini saya menyatakan bahwa data yang saya masukkan telah
                  benar
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSubmitContainer}>
              <Button
                title="Daftar Sekarang"
                containerStyle={styles.enterOTPButton}
                textStyle={styles.textButtonSubmit}
                onPress={() => this.initSignIn()}
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

export default Register;
