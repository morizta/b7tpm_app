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
  StyleSheet,
  Dimensions,
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

import Pdf from 'react-native-pdf';

// import PDFView from 'react-native-pdf-view';
// import {} from 'react-native-came';

// import styles from './informasitpm.style';
// import {Item} from 'native-base';

/**
 * Home container component
 *
 * @extends {React.Component}
 */
class InformasiTPM extends React.Component {
  state = {
    tableWidth: 168,
    characterMax: 35,
    listtpm: [],
  };
  constructor(props) {
    super(props);
  }

  _onScan(value) {
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
    const source = {
      uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
      cache: true,
    };

    // console.log('Source', source)

    return (
      <View>
        <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
        <View>
          <View style={styles.container}>
            <Pdf
              source={source}
              onLoadComplete={(numberOfPages, filePath) => {
                console.log(`number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page, numberOfPages) => {
                console.log(`current page: ${page}`);
              }}
              onError={error => {
                console.log(error);
              }}
              onPressLink={uri => {
                console.log(`Link presse: ${uri}`);
              }}
              style={styles.pdf}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: 'red',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default InformasiTPM;
