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
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import NumberFormat from 'react-number-format';
import {api_endpoint} from '../../../config';
import axios from 'axios';

import {} from 'react-native-came';

// import styles from './tpmredlist.style';
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
  };

  _onScan(value) {
    this.setState({ value: value.nativeEvent.codeStringValue })
    // axios
    //   .post(
    //     `${api_endpoint}inventory.php?qrcode=${value.nativeEvent.codeStringValue}&username=${this.state.username}`,
    //   )
    //   .then(response => {
    //     console.log(response.data)
    //     this.props.navigation.goBack()
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  render() {
    // const {
    //   Shift
    // } = this.props.data

    return (
      <View>
        <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
        <View>
        <View>
            <CameraKitCameraScreen
              showFrame={true}
              scanBarcode={true}
              laserColor={'blue'}
              frameColor={'yellow'}
              colorForScannerFrame={'black'}
              onReadCode={event => this._onScan(event)}
            />
          </View>
          {/* <Footer>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.versionText}>
                Version: {this.props.version}{' '}
                {this.props.configType === '' ? '' : '('}{' '}
                {this.props.configType}{' '}
                {this.props.configType === '' ? '' : ')'}
              </Text>
              <Text style={styles.footerText}>©2019 Dimas Aji</Text>
            </View>
          </Footer> */}
        </View>
      </View>
    );
  }
}

export default InformasiMesin;
