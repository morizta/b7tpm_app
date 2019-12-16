import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';

import styles from './header-title.style';

const HeaderTitle = ({style, text, image}) => (
  <View style={styles.wrapper}>
    <Text style={[styles.title, style]}>
      {image ? <Image source={image} style={styles.image} /> : null}
      {text ? text.toUpperCase() : ''}
    </Text>
  </View>
);

HeaderTitle.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.number,
};

export default HeaderTitle;
