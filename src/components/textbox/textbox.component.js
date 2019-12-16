/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './textbox.style';

const TextBox = ({
  name,
  placeholder,
  value,
  error,
  onChangeText,
  color,
  secureTextEntry,
  icon,
}) => {
  return (
    <View>
      {/* <View style={styles.wrapper}>        
        <Text style={styles.error}>{text}</Text>
      </View> */}
      <View style={styles.wrapper}>
        <Icon style={styles.icon} name={icon} color={color} size={30} />
        <TextInput
          style={{flex: 1, color: color}}
          placeholderTextColor={color}
          secureTextEntry={secureTextEntry}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  color: PropTypes.string,
  onChangeText: PropTypes.func,
};

TextBox.defaultProps = {
  color: '#fff',
};

export default TextBox;
