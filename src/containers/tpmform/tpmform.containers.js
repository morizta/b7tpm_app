/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Picker,
  Alert,
  PermissionsAndroid,
  Platform,
  // Icon,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {Images} from '../../../assets';

// import { RNHTMLtoPDF } from 'react-native-html-to-pdf';

import {
  Logo,
  Button,
  Header,
  Footer,
  Accordion,
  Loading,
  TextBox2,
  Content,
  DatePickers,
} from '../../components';
import {api_endpoint} from '../../../config';

import {List, ListItem, Item} from 'native-base';
import {Table, Row} from 'react-native-table-component';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

import styles from './tpmform.style';
// import {Item} from 'native-base';

/**
 * Home container component
 *
 * @extends {React.Component}
 */
class TPMForm extends React.Component {
  state = {
    id: 0,
    createdby: '',
    createddate: null,
    modifiedby: '',
    modifieddate: null,
    nokontrol: '',
    bagianmesin: '',
    deskripsi: '',
    noworkrequest: '',
    picfollowup: '',
    duedate: null,
    penanggulangan: '',
    status: 'Open',
    dipasangoleh: '',
    tableWidth: 168,
    characterMax: 35,
    listtpm: [],
    selecttpm: 1,
    photo: null,
    isdetail: true,
    enabled: false,
  };

  componentDidMount() {
    var Id = this.props.navigation.getParam('id');
    var SelectTpm = this.props.navigation.getParam('tpm');
    var segment = this.props.navigation.getParam('segment');
    var mode = this.props.navigation.getParam('mode');

    if (mode && mode === 'Details') {
      this.setState({
        isdetail: true,
        enabled: false,
      });
    } else {
      this.setState({
        isdetail: false,
        enabled: true,
      });
    }
    // console.log('ID', Id)

    var api = '';
    if (SelectTpm === 1) {
      api = `${api_endpoint}tpmwhite/getbyid.php`;
    } else if (SelectTpm === 2) {
      api = `${api_endpoint}tpmred/getbyid.php`;
    }

    let data = JSON.stringify({
      id: Id,
    });

    axios
      .post(api, data)
      .then(response => {
        // console.log(response);
        this.setState({
          ...response.data.data[0],
          selecttpm: SelectTpm,
          tableWidth: 168,
          characterMax: 35,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  _submit() {
    console.log('Submit', this.state);
    let data = JSON.stringify({
      id: this.state.id,
      nokontrol: this.state.nokontrol,
      bagianmesin: this.state.bagianmesin,
      tanggalpemasangan: this.state.tanggalpemasangan,
      deskripsi: this.state.deskripsi,
      noworkrequest: this.state.noworkrequest,
      picfollowup: this.state.picfollowup,
      duedate: this.state.duedate,
      dipasangoleh: this.state.dipasangoleh,
      penanggulangan: this.state.penanggulangan,
      status: this.state.status,
      createdby: this.state.createdby,
      createddate: this.state.createddate,
      modifiedby: this.state.modifiedby,
      modifieddate: this.state.modifieddate,
    });

    var api = '';
    var action = '';
    if (this.state.id === 0) {
      action = 'insert';
    } else {
      action = 'update';
    }

    if (this.state.selecttpm === 1) {
      api = `${api_endpoint}tpmwhite/` + action + `.php`;
    } else if (this.state.selecttpm === 2) {
      api = `${api_endpoint}tpmred/` + action + `.php`;
    }
    console.log('Di Submit', api);
    axios
      .post(api, data)
      .then(response => {
        console.log(response);
        Alert.alert('Sukses', 'Berhasil Simpan.');
        this.props.navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
      });
  }

  async _createPDF() {
    var api = '';

    let param = JSON.stringify({
      id: this.state.id,
    });
    if (this.state.selecttpm === 1) {
      api = `${api_endpoint}tpmwhite/exportpdf.php`;
    } else if (this.state.selecttpm === 2) {
      api = `${api_endpoint}tpmred/exportpdf.php`;
    }
    console.log('Di Submit', api);
    axios
      .post(api, param)
      .then(response => {
        console.log('Response export pdf', response);
        this._downloadFile(
          response.data.data,
          this.state.selecttpm === 1 ? 'tpmwhite' : 'tpmred',
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  _downloadFile(filename, type) {
    var url = `${api_endpoint}` + type + `/generatedfile/` + filename;
    // var ext = this.extention(url);
    // ext = '.' + ext[0];

    const {config, fs} = RNFetchBlob;
    let docDir = fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: docDir + '/' + filename,
        description: 'Pdf',
      },
    };
    config(options)
      .fetch('GET', url)
      .then(res => {
        Alert.alert('Success Downloaded');
      });
  }

  onPress = () => {
    var that = this;
    //Checking for the permission just after component loaded
    async function requestStoragePerm() {
      //Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'B7TPM App Storage Permission',
          message: 'B7TPM App needs access to your access your storage ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        that._createPDF();
      } else {
        Alert.alert('CAMERA Permission Denied.', '');
      }
    }
    if (Platform.OS === 'android') {
      requestStoragePerm();
    } else {
      this._createPDF();
    }
  };

  extention(filename) {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  }

  _onChangeTPM(item) {
    console.log('Select', item);
    this.setState({
      selecttpm: item,
    });

    if (item === 1) {
      axios
        .post(`${api_endpoint}tpmwhite/get.php`)
        .then(response => {
          console.log(response);
          this.setState({
            listtpm: response.data.data,
          });
          // this._navigateTo('App')
        })
        .catch(err => {
          console.log(err);
        });
    } else if (item === 2) {
      axios
        .post(`${api_endpoint}tpmred/get.php`)
        .then(response => {
          console.log(response);
          this.setState({
            listtpm: response.data.data,
          });
          // this._navigateTo('App')
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({
        listtpm: [],
      });
    }
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    // const {
    //   Shift
    // } = this.props.data
    console.log('This State', this.state);
    const {photo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
        <View style={styles.menuContainerBoxContent}>
          <ScrollView>
            <Content style={styles.content}>
              <Picker
                enabled={this.state.enabled}
                mode={'dropdown'}
                selectedValue={this.state.selecttpm}
                style={{
                  flex: 1,
                  color: 'black',
                  backgroundColor: 'white',
                  width: '100%',
                  marginBottom: 10,
                  paddingBottom: 10,
                  alignItems: 'center',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this._onChangeTPM(itemValue)
                }>
                <Picker.Item label="-- Select TPM --" value={0} />
                <Picker.Item label="TPM White List" value={1} />
                <Picker.Item label="TPM Red List" value={2} />
              </Picker>
              <TextBox2
                enabled={this.state.enabled}
                name="Nomor Kontrol"
                placeholder="Nomor Kontrol"
                value={this.state.nokontrol}
                onChangeText={text => this.setState({nokontrol: text})}
              />
              <TextBox2
                enabled={this.state.enabled}
                name="Bagian Mesin"
                placeholder="Bagian Mesin"
                value={this.state.bagianmesin}
                onChangeText={text => this.setState({bagianmesin: text})}
              />
              <TextBox2
                enabled={this.state.enabled}
                name="Dipasang Oleh"
                placeholder="Dipasang Oleh"
                value={this.state.dipasangoleh}
                onChangeText={text => this.setState({dipasangoleh: text})}
              />
              <DatePickers
                enabled={this.state.enabled}
                name="Tanggal Pemasangan"
                placeholder="Tanggal Pemasangan"
                value={this.state.tanggalpemasangan}
                onDateChange={text => this.setState({tanggalpemasangan: text})}
              />
              <TextBox2
                enabled={this.state.enabled}
                name="Deskripsi"
                placeholder="Deskripsi"
                value={this.state.deskripsi}
                onChangeText={text => this.setState({deskripsi: text})}
              />
              {this.state.selecttpm === 2 ? (
                <TextBox2
                  enabled={this.state.enabled}
                  name="Nomor Work Request"
                  placeholder="Nomor Work Request"
                  value={this.state.noworkrequest}
                  onChangeText={text => this.setState({noworkrequest: text})}
                />
              ) : (
                <View />
              )}
              {this.state.selecttpm === 2 ? (
                <TextBox2
                  enabled={this.state.enabled}
                  name="PIC Follow Up"
                  placeholder="PIC Follow Up"
                  value={this.state.picfollowup}
                  onChangeText={text => this.setState({picfollowup: text})}
                />
              ) : (
                <View />
              )}
              <DatePickers
                enabled={this.state.enabled}
                name="Due Date"
                placeholder="Due Date"
                value={this.state.duedate}
                onDateChange={text => this.setState({duedate: text})}
              />
              <TextBox2
                enabled={this.state.enabled}
                name="Penanggulangan"
                placeholder="Penanggulangan"
                value={this.state.penanggulangan}
                onChangeText={text => this.setState({penanggulangan: text})}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  // margin: 15,
                  backgroundColor: 'silver',
                  width: 250,
                  height: 250,
                  padding: 7.5,
                }}>
                {photo ? (
                  <TouchableOpacity>
                    <Image
                      source={{uri: photo.uri}}
                      style={{
                        width: 230,
                        height: 230,
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}
                      onPress={() => {
                        this.handleChoosePhoto();
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity>
                    <Text
                      onPress={() => {
                        this.handleChoosePhoto();
                      }}>
                      {this.state.isdetail ? 'Tidak ada Foto' : 'Pilih Foto'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 15,
                  marginBottom: 15,
                }}>
                {!this.state.isdetail ? (
                  <Button
                    title={photo ? 'Ganti Foto' : 'Pilih Foto'}
                    onPress={this.handleChoosePhoto}
                  />
                ) : (
                  <View />
                )}
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                  title="Print"
                  containerStyle={styles.enterOTPButton}
                  textStyle={styles.textButtonSubmit}
                  // containerStyle={styles.enterButton}
                  onPress={() => this.onPress()}
                  //loading={this.state.enableLogin}
                />
                {!this.state.isdetail ? (
                  <Button
                    title="Simpan"
                    containerStyle={styles.enterOTPButton}
                    textStyle={styles.textButtonSubmit}
                    // containerStyle={styles.enterButton}
                    onPress={() => this._submit()}
                    //loading={this.state.enableLogin}
                  />
                ) : (
                  <View />
                )}
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
  }
}

export default TPMForm;
