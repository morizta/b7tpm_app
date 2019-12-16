import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableNativeFeedback,
  TouchableHighlight,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';

import Color from '../../styles';
import styles from './button.style';

const Button = ({
  containerStyle,
  title,
  onPress,
  disabled,
  loading,
  textStyle,
}) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback disabled={disabled || loading} onPress={onPress}>
        <View style={[styles.container, containerStyle]}>
          {loading ? (
            <ActivityIndicator color={Color.HIGHLIGHT} />
          ) : (
            <Text style={[styles.text, textStyle]}>{title}</Text>
          )}
        </View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableHighlight disabled={disabled || loading} onPress={onPress}>
        <View style={[styles.container, containerStyle]}>
          {loading ? (
            <ActivityIndicator color={Color.HIGHLIGHT} />
          ) : (
            <Text style={[styles.text, textStyle]}>{title}</Text>
          )}
        </View>
      </TouchableHighlight>
    );
  }
};

Button.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  textStyle: PropTypes.object,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
};
export default Button;
