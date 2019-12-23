import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'native-base';
import {Text, View} from 'react-native';
import styles from './accordion.style';
import AsyncStorage from '@react-native-community/async-storage';

class Accordion extends React.Component {
  state = {
    // default is opened if not ok
    toggle: this.props.attentionNeeded === false,
    usergroup: null,
  };

  _toggle = () => {
    const {toggle} = this.state;
    this.setState({toggle: !toggle});
  };

  componentDidMount() {
    console.log('Props', this.props);
  }

  render() {
    const {toggle} = this.state;
    const {children, defaultChildren} = this.props;

    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.leftButton}
            block
            success
            onPress={this._toggle}>
            <Text style={styles.headerContentDetailText}>
              {toggle ? 'Hide' : 'Show'}
            </Text>
          </Button>
          {this.props.user === 'User' ? (
            <Button
              style={styles.rightButton}
              block
              success
              onPress={() => {
                this.props.navigation.navigate('TPMForm');
              }}>
              <Text style={styles.headerContentDetailText}>Details</Text>
            </Button>
          ) : (
            <Button
              style={styles.rightButton}
              block
              success
              onPress={() => {
                this.props.navigation.navigate('TPMForm');
              }}>
              <Text style={styles.headerContentDetailText}>Edit</Text>
            </Button>
          )}
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
