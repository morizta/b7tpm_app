import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'native-base';
import {Text, View} from 'react-native';
import styles from './accordion.style';

class Accordion extends React.Component {
  state = {
    // default is opened if not ok
    toggle: this.props.attentionNeeded === false,
  };

  _toggle = () => {
    const {toggle} = this.state;
    this.setState({toggle: !toggle});
  };

  render() {
    const {toggle} = this.state;
    const {children, defaultChildren} = this.props;

    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.rightButton}
            block
            success
            onPress={this._toggle}>
            <Text style={styles.headerContentDetailText}>
              {toggle ? 'Hide' : 'Details'}
            </Text>
          </Button>
        </View>
        <View>
          {defaultChildren}
          {toggle ? children : null}
        </View>
      </View>
    );
  }
}

Accordion.propTypes = {
  attentionNeeded: PropTypes.bool,
  style: PropTypes.object,
  styleTitle: PropTypes.object,
  styleSubTitle: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.any,
  defaultChildren: PropTypes.any,
};

export default Accordion;
