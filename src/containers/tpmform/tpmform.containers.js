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
  // Icon,
} from 'react-native';
import {Images} from '../../../assets';

import { RNHTMLtoPDF } from 'react-native-html-to-pdf';

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
  };

  componentDidMount() {
    var Id = this.props.navigation.getParam('id');
    var SelectTpm = this.props.navigation.getParam('tpm');
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
        // this.setState({
        //   listtpm: response.data.data,
        // });
        // this._navigateTo('App')
      })
      .catch(err => {
        console.log(err);
      });
    // fetch(`${api_endpoint}tpmred/get.php`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log('Response Json', responseJson);
    //     this.setState({
    //       listtpm: responseJson.data,
    //     });
    //     // if (responseJson.message === 'User not available') {
    //     //   Alert.alert('Login failed', 'User not found.');
    //     // } else {
    //     //   // this.props.navigation.navigate('Home');
    //     //   console.log('responseJson', responseJson.data[0]);
    //     //   AsyncStorage.setItem('auth', JSON.stringify(responseJson.data[0]));
    //     //   const auth = AsyncStorage.getItem('auth');
    //     //   console.log('Isi Session Auth', auth);
    //     //   //save session goto home menu
    //     // }
    //     return;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     // Alert.alert('Invalid Verification Code', error);
    //     return;
    //   });
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
    const options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    // Alert.alert('FilePath', file.filePath);
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

  render() {
    // const {
    //   Shift
    // } = this.props.data

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
        <View style={styles.menuContainerBoxContent}>
          <ScrollView>
            <Content style={styles.content}>
              <Picker
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
                name="Nomor Kontrol"
                placeholder="Nomor Kontrol"
                value={this.state.nokontrol}
                onChangeText={text => this.setState({nokontrol: text})}
              />
              <TextBox2
                name="Bagian Mesin"
                placeholder="Bagian Mesin"
                value={this.state.bagianmesin}
                onChangeText={text => this.setState({bagianmesin: text})}
              />
              <TextBox2
                name="Dipasang Oleh"
                placeholder="Dipasang Oleh"
                value={this.state.dipasangoleh}
                onChangeText={text => this.setState({dipasangoleh: text})}
              />
              <DatePickers
                name="Tanggal Pemasangan"
                placeholder="Tanggal Pemasangan"
                value={this.state.tanggalpemasangan}
                onDateChange={text => this.setState({tanggalpemasangan: text})}
              />
              <TextBox2
                name="Deskripsi"
                placeholder="Deskripsi"
                value={this.state.deskripsi}
                onChangeText={text => this.setState({deskripsi: text})}
              />
              {this.state.selecttpm === 2 ? (
                <TextBox2
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
                  name="PIC Follow Up"
                  placeholder="PIC Follow Up"
                  value={this.state.picfollowup}
                  onChangeText={text => this.setState({picfollowup: text})}
                />
              ) : (
                <View />
              )}
              <DatePickers
                name="Due Date"
                placeholder="Due Date"
                value={this.state.duedate}
                onDateChange={text => this.setState({duedate: text})}
              />
              <TextBox2
                name="Penanggulangan"
                placeholder="Penanggulangan"
                value={this.state.penanggulangan}
                onChangeText={text => this.setState({penanggulangan: text})}
              />
              <View style={styles.buttonSubmitContainer}>
                <Button
                  title="Simpan"
                  containerStyle={styles.enterOTPButton}
                  textStyle={styles.textButtonSubmit}
                  // containerStyle={styles.enterButton}
                  onPress={() => this._submit()}
                  //loading={this.state.enableLogin}
                />
                <Text>{'\n'}</Text>
                <Button
                  title="Print"
                  containerStyle={styles.enterOTPButton}
                  textStyle={styles.textButtonSubmit}
                  // containerStyle={styles.enterButton}
                  onPress={() => this._createPDF()}
                  //loading={this.state.enableLogin}
                />
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
