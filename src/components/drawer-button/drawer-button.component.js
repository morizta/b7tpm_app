import React from 'react';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './drawer-button.style';
// import {DrawerActions} from 'react-navigation-drawer';

const DrawerButton = ({navigation}) => (
  <Button
    style={styles.drawer}
    transparent
    onPress={() => {
      navigation.navigate('Home');
    }}>
    <Icon name="arrow-left" size={25} style={styles.icon} />
  </Button>
);

DrawerButton.propTypes = {
  navigation: PropTypes.object,
};

export default DrawerButton;

// import React from 'react';
// import {Button} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import PropTypes from 'prop-types';
// import styles from './drawer-button.style';
// import {DrawerActions} from 'react-navigation-drawer';

// const DrawerButton = ({navigation}) => (
//   <Button
//     style={styles.drawer}
//     transparent
//     onPress={() => {
//       navigation.dispatch(DrawerActions.toggleDrawer());
//     }}>
//     <Icon name="bars" size={25} style={styles.icon} />
//   </Button>
// );

// DrawerButton.propTypes = {
//   navigation: PropTypes.object,
// };

// export default DrawerButton;
