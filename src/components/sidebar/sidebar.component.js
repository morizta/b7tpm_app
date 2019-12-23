import React, {Component} from 'react';
//import { NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types';
import {View, Image, AsyncStorage} from 'react-native';
import {Text, List, ListItem} from 'native-base';
import {DrawerActions} from 'react-navigation-drawer';
import styles from './sidebar.style';
import {Images} from '../../../assets';

const routes = [
  {
    id: 'Home',
    name: 'Home',
    image: Images.sidebar_icon_home,
  },
  {
    id: 'BenefitLimit',
    name: 'Benefit Limit',
    image: Images.sidebar_icon_benefit_limit,
  },
  {
    id: 'InpatientBenefitLimit',
    name: 'Inpatient Benefit Limit',
    image: Images.sidebar_icon_inpatient_benefit_limit,
  },
  {
    id: 'ClaimStatus',
    name: 'Claim Status',
    image: Images.sidebar_icon_claim_status,
  },
  {
    id: 'PersonalAdvance',
    name: 'Medical Excess',
    image: Images.sidebar_icon_personal_advance,
  },
  {
    id: 'Provider',
    name: 'Providers',
    image: Images.sidebar_icon_providers,
  },
  {
    id: 'Handbook',
    name: 'Handbook',
    image: Images.sidebar_icon_handbook,
  },
  {
    id: 'ContactUs',
    name: 'Contact Us',
    image: Images.sidebar_icon_contactus,
  },
  {
    id: 'Auth',
    name: 'Logout',
    image: Images.sidebar_icon_logout,
  },
];

class SideBar extends Component {
  navigateToScreen = route => () => {
    //this.props.navigation.navigate(route)
    //console.log(route)
    if (route === 'Auth') {
      AsyncStorage.removeItem('employee');
      AsyncStorage.removeItem('session');
    }
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <View>
        {/* <Image source={Images.sidebar_header}/> */}
        <List
          dataArray={routes}
          renderRow={data => {
            return (
              <ListItem button onPress={this.navigateToScreen(data.id)}>
                <Image source={data.image} style={styles.ratingImage} />
                <Text style={styles.menuItem}>{data.name}</Text>
              </ListItem>
            );
          }}
        />
      </View>
    );
  }
}

SideBar.propTypes = {
  navigation: PropTypes.object,
};

export default SideBar;
