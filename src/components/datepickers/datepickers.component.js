/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './datepickers.style';

const DatePickers = ({
  name,
  placeholder,
  value,
  error,
  onDateChange,
  color,
  secureTextEntry,
  icon,
  enabled,
}) => {
  const disabled = enabled ? false : true;
  // console.log('Disable', disabled);
  return (
    <View>
      <View style={styles.textView}>
        <Text style={styles.textLabel}>{name}</Text>
      </View>
      <View style={styles.wrapper}>
        {/* <Icon style={styles.icon} name={icon} color={color} size={30} /> */}
        {/* <TextInput
          style={{flex: 1, color: color}}
          placeholderTextColor={'#bff2f6'}
          secureTextEntry={secureTextEntry}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        /> */}
        <DatePicker
          style={{flex: 1, color: color}}
          date={value}
          mode="date"
          placeholder={placeholder}
          disabled={disabled}
          format="YYYY-MM-DD"
          confirmBtnText="Ok"
          cancelBtnText="Batal"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
              borderWidth: 0,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={onDateChange}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

DatePickers.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  color: PropTypes.string,
  onDateChange: PropTypes.func,
};

DatePickers.defaultProps = {
  color: '#000',
};

export default DatePickers;
