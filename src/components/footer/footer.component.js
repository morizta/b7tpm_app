import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './footer.style';

const Footer = ({style, children}) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

Footer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Footer;
