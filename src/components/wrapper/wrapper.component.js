import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './wrapper.style';

const Wrapper = ({children, style}) => {
  return <View style={[styles.wrapper, style]}>{children}</View>;
};

Wrapper.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

export default Wrapper;
