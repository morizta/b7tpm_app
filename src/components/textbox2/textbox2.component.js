/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './textbox2.style';

const TextBox2 = ({
  name,
  placeholder,
  value,
  error,
  onChangeText,
  color,
  secureTextEntry,
  icon,
  enabled,
}) => {
  return (
    <View>
      <View style={styles.textView}>
        <Text style={styles.textLabel}>{name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Icon style={styles.icon} name={icon} color={color} size={30} />
        <TextInput
          style={{flex: 1, color: color}}
          // placeholderTextColor={'#bff2f6'}
          secureTextEntry={secureTextEntry}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          editable={enabled}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

TextBox2.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  color: PropTypes.string,
  onChangeText: PropTypes.func,
};

TextBox2.defaultProps = {
  color: '#000',
};

export default TextBox2;
