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
  Picker,
  // Icon,
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
import AsyncStorage from '@react-native-community/async-storage';

import styles from './administrasiform.style';
// import {Item} from 'native-base';

/**
 * Home container component
 *
 * @extends {React.Component}
 */
class AdministrasiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWidth: 168,
      characterMax: 35,
      listtpm: [],
      selecttpm: 0,
    };
    this._gotoTPForm = this._gotoTPForm.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('auth').then(value => {
      const employee = JSON.parse(value);
      this.setState({group: employee[0].groupname});
    });
  }

  _gotoTPForm() {
    console.log('This');
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              width: '50%',
              alignSelf: 'center',
              // backgroundColor: 'black',
            }}>
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
              <Picker.Item label="TPM White" value={1} />
              <Picker.Item label="TPM Red" value={2} />
            </Picker>
          </View>
          {this.state.listtpm ? (
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
                            {this.state.selecttpm === 2 ? (
                              <Row
                                widthArr={[125]}
                                textStyle={styles.tableRowText}
                                data={['Nomor Work Request']}
                              />
                            ) : (
                              <Row />
                            )}
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
                            {this.state.selecttpm === 2 ? (
                              <Row
                                widthArr={[this.state.tableWidth]}
                                textStyle={styles.tableRowValue}
                                data={[data.noworkrequest]}
                              />
                            ) : (
                              <Row />
                            )}
                            <Row
                              style={styles.tableRowFooter}
                              textStyle={styles.tableRowValue}
                              widthArr={[this.state.tableWidth]}
                              data={['']}
                            />
                          </Table>
                        </View>
                        <Accordion
                          user={this.state.group}
                          goto={this._gotoTPForm}>
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
                              {this.state.selecttpm === 2 ? (
                                <Row
                                  style={styles.tableRowEven}
                                  textStyle={styles.tableRowText}
                                  widthArr={[125]}
                                  data={['PIC Follow Up']}
                                />
                              ) : (
                                <Row />
                              )}
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
                              {this.state.selecttpm === 2 ? (
                                <Row
                                  widthArr={[this.state.tableWidth]}
                                  textStyle={styles.tableRowValue}
                                  style={styles.tableRowEven}
                                  data={[data.picfollowup]}
                                />
                              ) : (
                                <Row />
                              )}
                              <Row
                                widthArr={[this.state.tableWidth]}
                                textStyle={styles.tableRowValue}
                                data={[
                                  data.duedate
                                    ? moment(data.tanggalpemasangan).format(
                                        'DD MMM YYYY HH:MM',
                                      )
                                    : '-',
                                ]}
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
                          {/* <View style={styles.buttonContainerFooter}>
                            <Button style={styles.rightButtonFooter}>
                              <Text style={styles.headerContentDetailText}>
                                Edit
                              </Text>
                            </Button>
                          </View> */}
                        </Accordion>
                      </View>
                    </ListItem>
                  );
                }}
              />
            </ScrollView>
          ) : (
            <View style={styles.container}>
              <View style={styles.menuContainerBoxHeader}>
                <Item style={styles.profileInfoItem}>
                  <Text style={styles.headerDate}>Data not found</Text>
                </Item>
              </View>
            </View>
          )}

          <Footer>
            <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
              <Text style={styles.footerText}>Copy Right ©2019 B7TPM App by Dimas Aji</Text>
            </View>
          </Footer>
        </View>
      </View>
    );
  }
}

export default AdministrasiForm;
