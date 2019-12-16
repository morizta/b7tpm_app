import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ActivityIndicator
} from 'react-native'

import styles from './loading.style'

const Loading = ({ size, color }) => (
  <View style={styles.wrapper}>
    <ActivityIndicator
      size={size}
      color={color}
    />
  </View>
)

Loading.propTypes = {
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small'
  ]),
  color: PropTypes.string
}

Loading.defaultProps = {
  size: 'large'
}

export default Loading
