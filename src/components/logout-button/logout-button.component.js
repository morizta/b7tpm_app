import React from 'react';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './logout-button.style';
import AsyncStorage from '@react-native-community/async-storage';

const LogoutButton = ({navigation}) => (
  <Button
    style={styles.drawer}
    transparent
    onPress={() => {
      AsyncStorage.removeItem('auth');
      navigation.navigate('Auth');
    }}>
    <Icon name="sign-out" size={25} style={styles.icon} />
  </Button>
);

LogoutButton.propTypes = {
  navigation: PropTypes.object,
};

export default LogoutButton;
