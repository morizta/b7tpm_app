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
} from 'react-native';
import {Images} from '../../../assets';

import {
  Logo,
  Button,
  Header,
  Footer,
  Accordion,
  Loading,
} from '../../components';

import {List, ListItem, Item} from 'native-base';
import {Table, Row} from 'react-native-table-component';
import NumberFormat from 'react-number-format';
import {api_endpoint} from '../../../config';
import axios from 'axios';

import styles from './tpmredlist.style';
// import {Item} from 'native-base';

/**
 * Home container component
 *
 * @extends {React.Component}
 */
class TPMRedList extends React.Component {
  state = {
    tableWidth: 168,
    characterMax: 35,
    listtpm: [],
  };

  componentDidMount() {
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

  render() {
    // const {
    //   Shift
    // } = this.props.data

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
        <View>
          <ScrollView style={styles.menuScrollView}>
            <List
              dataArray={this.state.listtpm}
              renderRow={data => {
                return (
                  <ListItem style={styles.headerContentContainer}>
                    <View style={styles.scrollListContainer}>
                      <View style={styles.tableContainer}>
                        <Table
                          borderStyle={styles.tableBorder}
                          style={styles.tableLeft}>
                          <Row
                            style={styles.tableRowHeader}
                            widthArr={[125]}
                            data={['']}
                          />
                          <Row
                            style={styles.tableRowEven}
                            textStyle={styles.tableRowText}
                            widthArr={[125]}
                            data={['Nomor Kontrol']}
                          />
                          <Row
                            widthArr={[125]}
                            textStyle={styles.tableRowText}
                            data={['Tgl Pemasangan']}
                          />
                          <Row
                            style={styles.tableRowEven}
                            textStyle={styles.tableRowText}
                            widthArr={[125]}
                            data={['Dipasang Oleh']}
                          />
                          <Row
                            widthArr={[125]}
                            textStyle={styles.tableRowText}
                            data={['Nomor Work Request']}
                          />
                          <Row
                            style={styles.tableRowFooter}
                            widthArr={[125]}
                            data={['']}
                          />
                        </Table>

                        <Table
                          borderStyle={styles.tableBorder}
                          style={styles.tableRight}>
                          <Row
                            style={styles.tableRowHeader}
                            widthArr={[this.state.tableWidth]}
                            data={['']}
                          />
                          <Row
                            style={styles.tableRowEven}
                            widthArr={[this.state.tableWidth]}
                            textStyle={styles.tableRowValue}
                            data={[data.nokontrol]}
                          />
                          <Row
                            style={styles.tableWidth}
                            widthArr={[this.state.tableWidth]}
                            textStyle={styles.tableRowValue}
                            data={[
                              data.tanggalpemasangan
                                ? moment(data.tanggalpemasangan).format(
                                    'DD MMM YYYY HH:MM',
                                  )
                                : '-',
                            ]}
                          />
                          <Row
                            style={styles.tableRowEven}
                            widthArr={[this.state.tableWidth]}
                            textStyle={styles.tableRowValue}
                            data={[data.dipasangoleh]}
                          />
                          <Row
                            widthArr={[this.state.tableWidth]}
                            textStyle={styles.tableRowValue}
                            data={[data.noworkrequest]}
                          />
                          <Row
                            style={styles.tableRowFooter}
                            textStyle={styles.tableRowValue}
                            widthArr={[this.state.tableWidth]}
                            data={['']}
                          />
                        </Table>
                      </View>
                      <Accordion>
                        <View style={styles.tableContainer}>
                          <Table
                            borderStyle={styles.tableBorder}
                            style={styles.tableLeft}>
                            <Row
                              style={styles.tableRowHeaderDetail}
                              widthArr={[125]}
                              data={['']}
                            />
                            <Row
                              style={styles.tableRowEven}
                              textStyle={styles.tableRowText}
                              widthArr={[125]}
                              data={['Bagian Mesin']}
                            />
                            <Row
                              widthArr={[125]}
                              textStyle={styles.tableRowText}
                              data={['Deskripsi']}
                            />
                            <Row
                              style={styles.tableRowEven}
                              textStyle={styles.tableRowText}
                              widthArr={[125]}
                              data={['PIC Follow Up']}
                            />
                            <Row
                              widthArr={[125]}
                              textStyle={styles.tableRowText}
                              data={['Due Date']}
                            />
                            <Row
                              style={styles.tableRowEven}
                              textStyle={styles.tableRowText}
                              widthArr={[125]}
                              data={['Status']}
                            />
                            <Row
                              style={styles.tableRowFooter}
                              widthArr={[125]}
                              data={['']}
                            />
                          </Table>

                          <Table
                            borderStyle={styles.tableBorder}
                            style={styles.tableRight}>
                            <Row
                              style={styles.tableRowHeaderDetail}
                              widthArr={[this.state.tableWidth]}
                              data={['']}
                            />
                            <Row
                              style={styles.tableRowEven}
                              textStyle={styles.tableRowValue}
                              widthArr={[this.state.tableWidth]}
                              data={[data.bagianmesin]}
                            />
                            <Row
                              widthArr={[this.state.tableWidth]}
                              textStyle={styles.tableRowValue}
                              data={[data.deskripsi]}
                            />
                            <Row
                              widthArr={[this.state.tableWidth]}
                              textStyle={styles.tableRowValue}
                              style={styles.tableRowEven}
                              data={[data.picfollowup]}
                            />
                            <Row
                              widthArr={[this.state.tableWidth]}
                              textStyle={styles.tableRowValue}
                              data={[
                                data.duedate
                                  ? moment(data.tanggalpemasangan).format(
                                      'DD MMM YYYY HH:MM',
                                    )
                                  : '-',]}
                            />
                            <Row
                              widthArr={[this.state.tableWidth]}
                              textStyle={styles.tableRowValue}
                              style={styles.tableRowEven}
                              data={[data.status]}
                            />
                            <Row
                              style={styles.tableRowFooter}
                              widthArr={[this.state.tableWidth]}
                              data={['']}
                            />
                          </Table>
                        </View>
                      </Accordion>
                    </View>
                  </ListItem>
                );
              }}
            />
          </ScrollView>
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

export default TPMRedList;
