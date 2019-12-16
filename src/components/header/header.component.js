import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './header.style';

const Header = ({style, children}) => {
  return <View style={[styles.header, style]}>{children}</View>;
};

Header.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Header;
