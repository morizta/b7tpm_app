import React from 'react';
import {Icon, Button} from 'native-base';
import PropTypes from 'prop-types';
import styles from './back-button.style';

const BackButton = ({navigation}) => (
  <Button
    style={styles.drawer}
    transparent
    onPress={() => {
      navigation.goBack();
    }}>
    <Icon name="arrow-back" style={styles.icon} />
  </Button>
);

BackButton.propTypes = {
  navigation: PropTypes.object,
};

export default BackButton;
