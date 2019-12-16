import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';

import styles from './logo.style';

const Logo = ({image, text}) => (
  <View>
    <Text style={[styles.logoText, styles.text]}>{text}</Text>
    <Image source={image} style={styles.logoIMG} />
  </View>
);

Logo.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any.isRequired,
};

export default Logo;
