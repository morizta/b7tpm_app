/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {Images} from '../../../assets';

import {
  Logo,
  Button,
  Header,
  Footer,
  Accordion,
  Loading,
  TextBox2,
  Content,
} from '../../components';

import {List, ListItem, Item} from 'native-base';
import {Table, Row} from 'react-native-table-component';
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import NumberFormat from 'react-number-format';
import {api_endpoint} from '../../../config';
import axios from 'axios';

// import {} from 'react-native-came';

import styles from './informasimesin.style';
// import {Item} from 'native-base';

/**
 * Home container component
 *
 * @extends {React.Component}
 */
class InformasiMesin extends React.Component {
  state = {
    tableWidth: 168,
    characterMax: 35,
    listtpm: [],
    code: null,
    infomesin: [],
    enabled: false,
    isexist: false,
  };

  componentDidMount() {
    // this._permissionCamera();
    // let codes = 8992775709085;
    // let data = JSON.stringify({
    //   code: 8992775709085,
    // });
    // axios
    //   .post(`${api_endpoint}infomesin/getbycode.php`, data)
    //   .then(response => {
    //     if (response.data.code === 200) {
    //       console.log('Found');
    //       let result = response.data.data[0];
    //       console.log(result);
    //       this.setState({
    //         id: result.id,
    //         nomesin: result.nomesin,
    //         noasset: result.noasset,
    //         code: result.code,
    //         tglmulaioperasi: result.tglmulaioperasi,
    //         ruang: result.ruang,
    //         createddate: result.createddate,
    //         createdby: result.createdby,
    //         isexist: true,
    //       });
    //     } else {
    //       this.setState({
    //         isexist: false,
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  // _permissionCamera = () => {
  //   //Checking for the permission just after component loaded
  //   async function requestStoragePerm() {
  //     //Calling the permission function
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: 'B7TPM App Camera Permission',
  //         message: 'B7TPM App needs access to your access your Camera ',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
  //       Alert.alert('CAMERA Permission Denied.', '');
  //       this.props.navigation.navigate('Home');
  //     }
  //   }
  //   if (Platform.OS === 'android') {
  //     requestStoragePerm();
  //   }
  // };

  _onScan(value) {
    // console.log('Code', value.nativeEvent.codeStringValue);

    let data = JSON.stringify({
      code: value.nativeEvent.codeStringValue,
    });
    Alert.alert('Not Found');
    this.setState({code: value.nativeEvent.codeStringValue});
    axios
      .post(`${api_endpoint}infomesin/getbycode.php`, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // const {
    //   Shift
    // } = this.props.data
    if (this.state.code) {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
          <View style={styles.menuContainerBoxContent}>
            <ScrollView>
              <Content style={styles.content}>
                <TextBox2
                  enabled={this.state.enabled}
                  name="Nomor Asset"
                  placeholder="Nomor Asset"
                  value={this.state.noasset}
                  onChangeText={text => this.setState({noasset: text})}
                />
                <TextBox2
                  enabled={this.state.enabled}
                  name="Nomor Mesin"
                  placeholder="Nomor Mesin"
                  value={this.state.nomesin}
                  onChangeText={text => this.setState({nomesin: text})}
                />
                <TextBox2
                  enabled={this.state.enabled}
                  name="Tanggal Operasi"
                  placeholder="Tanggal Mulai Operasi"
                  value={this.state.tglmulaioperasi}
                  onChangeText={text => this.setState({tglmulaioperasi: text})}
                />
                <TextBox2
                  enabled={this.state.enabled}
                  name="Ruang"
                  placeholder="Ruang"
                  value={this.state.ruang}
                  onChangeText={text => this.setState({ruang: text})}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 50,
                  }}>
                  <Button
                    title="Scan Barcode"
                    containerStyle={styles.enterOTPButton}
                    textStyle={styles.textButtonSubmit}
                    // containerStyle={styles.enterButton}
                    onPress={() => this.setState({code: null})}
                    //loading={this.state.enableLogin}
                  />
                  {/* {!this.state.isdetail ? (
                    <Button
                      title="Simpan"
                      containerStyle={styles.enterOTPButton}
                      textStyle={styles.textButtonSubmit}
                      // containerStyle={styles.enterButton}
                      // onPress={() => this._submit()}
                      //loading={this.state.enableLogin}
                    />
                  ) : (
                    <View />
                  )} */}
                </View>
              </Content>
            </ScrollView>
            <Footer>
              <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                <Text style={styles.footerText}>
                  Copy Right ©2019 B7TPM App by Dimas Aji
                </Text>
              </View>
            </Footer>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
          <View>
            <View>
              <CameraKitCameraScreen
                showFrame={true}
                scanBarcode={true}
                laserColor={'red'}
                frameColor={'yellow'}
                colorForScannerFrame={'black'}
                onReadCode={event => this._onScan(event)}
                // onReadQRCode={event => this._onScan(event)}
              />
            </View>
            <Footer>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.versionText}>
                  Version: {this.props.version}{' '}
                  {this.props.configType === '' ? '' : '('}{' '}
                  {this.props.configType}{' '}
                  {this.props.configType === '' ? '' : ')'}
                </Text>
                <Text style={styles.footerText}>©2019 Dimas Aji</Text>
              </View>
            </Footer>
          </View>
        </View>
      );
    }
  }
}

export default InformasiMesin;
