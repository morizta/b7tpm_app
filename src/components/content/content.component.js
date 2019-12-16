import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import styles from './content.style';

const Content = ({style, children}) => {
  return <View style={[styles.content, style]}>{children}</View>;
};

Content.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Content;
