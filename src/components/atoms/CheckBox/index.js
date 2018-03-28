import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../styles/colors.js';

import styles from './style.js';

class CheckBox extends Component {

  handlePress (e) {
    const { isChecked, onPress } = this.props;
    onPress(!isChecked);
  }

  render () {
    const { isChecked, activeColor, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={(e) => this.handlePress(e)} >
        <View
          style={[
            styles.checkbox,
            isChecked && { backgroundColor: activeColor }]} >
          <Icon
            name="check"
            color={colors.white}
            style={{ display: isChecked ? 'flex' : 'none' }}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

export default CheckBox;
