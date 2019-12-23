/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
//import Icon from 'react-native-vector-icons/FontAwesome'
// import {compose} from 'react-apollo';
// import {connect} from 'react-redux';
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//import EmployeeTitle from '../employee-title'

//import { Queries } from '../../graphql'
import {Images} from '../../../assets';
//import { GqlErrorHandler, WithPolling } from '../../hoc'
//import { Storage, Formatting, Lookups, Features } from '../../utils'
import {Logo, Button, Header, Footer} from '../../components';

import styles from './home.style';
import {Item} from 'native-base';

/**
 * Home container component
 *
 * @extends {React.Component}
 */
class Home extends React.Component {
  // state = {
  //   ModalVisible: false,
  //   Description: Features.WhatsNew.CHANGE_LOG,
  // }

  // componentDidMount() {
  //   const key = this.props.version
  //   Storage.Async.getItem(key, () => this.setModalVisible(true, key))
  // }

  // setModalVisible(ModalVisible, key = null) {
  //   ModalVisible ? Storage.Async.setItem(key, key) : null
  //   this.setState({ ModalVisible })
  // }

  /**
   * Navigation utility
   *
   * @param {String} screen Name of container to navigate to
   * @param {Object} params Params to be passed with navigation
   */
  // _navigateTo = (screen, params) => {
  //   const { navigate } = this.props.navigation
  //   navigate(screen, params)
  // }

  /**
   * Get sorted fleet based on productivity
   *
   * @param {Array} fleetData fleet to be sorted
   *
   * @return {Array} sorted array of param {fleetData}
   */
  // getTableData = (fleetData) => [...fleetData]
  //   .sort(
  //     (thisFleet, nextFleet) =>
  //       nextFleet.Digger.Performance.Actual.Productivity
  //       - thisFleet.Digger.Performance.Actual.Productivity
  //   ).map(
  //     (thisFleet, index) => [
  //       {
  //         value: index + 1,
  //         colStyle: { flex: 1 }
  //       },
  //       {
  //         value: thisFleet.Name,
  //         colStyle: { flex: 4, fontWeight: index < 3 ? 'bold' : 'normal' }
  //       },
  //       {
  //         value: Formatting.Numbers.FormatNumber(
  //           thisFleet.Digger.Performance.Actual.Productivity
  //         ),
  //         colStyle: { textAlign: 'right', flex: 2 }
  //       }
  //     ]
  //   )

  /**
   * Render *Home* container
   *
   * @returns {JSX} Home component tree
   */
  render() {
    // const {
    //   Shift
    // } = this.props.data

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2a7050" barStyle="light-content" />
        <View style={styles.menuContainerBoxContent}>
          <Header style={styles.logo}>
            <Logo
              text={'B7 Engineering app by Dimas Aji'}
              image={Images.logo_bintangtoedjoe}
            />
          </Header>
          <ScrollView style={styles.menuScrollView}>
            <View style={styles.menuContainerBox}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() =>
                  this.props.navigation.navigate('AdministrasiForm')
                }>
                <Image
                  style={styles.menuImage}
                  source={Images.homepage_icon_claim_staus}
                />
                <Text style={styles.menuTitle}>Administrasi Form</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => this.props.navigation.navigate('TPMForm')}>
                <Image
                  style={styles.menuImage}
                  source={Images.homepage_icon_claim_staus}
                />
                <Text style={styles.menuTitleLog}>TPM Form</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => this.props.navigation.navigate('StatusForm')}>
                <Image
                  style={styles.menuImage}
                  source={Images.homepage_icon_claim_staus}
                />
                <Text style={styles.menuTitle}>Status Form</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() =>
                  this.props.navigation.navigate('RoadCostAnalysis')
                }>
                <Image
                  style={styles.menuImage}
                  source={Images.homepage_icon_claim_staus}
                />
                <Text style={styles.menuTitle}>RCA (Road Cost Analysis)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => this.props.navigation.navigate('InformasiTPM')}>
                <Image
                  style={styles.menuImage}
                  source={Images.homepage_icon_handbook}
                />
                <Text style={styles.menuTitle}>Informasi TPM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() =>
                  this.props.navigation.navigate('InformasiMesin')
                }>
                <Image
                  style={styles.menuImage}
                  source={Images.homepage_icon_handbook}
                />
                <Text style={styles.menuTitle}>Informasi Mesin</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Footer>
          <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
            <Text style={styles.footerText}>
              Copy Right ©2019 B7TPM App by Dimas Aji
            </Text>
          </View>
        </Footer>
      </View>
    );
  }
}

export default Home;
