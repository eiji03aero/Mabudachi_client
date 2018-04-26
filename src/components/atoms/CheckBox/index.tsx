import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../styles/colors.js';

import styles from './style.js';

interface Props {
  isChecked: boolean;
  onPress: (d: boolean) => void;
  activeColor: string;
}

interface State { }

class CheckBox extends Component<Props, State> {

  public handlePress (e: any) {
    const { isChecked, onPress } = this.props;
    onPress(!isChecked);
  }

  public render () {
    const { isChecked, activeColor } = this.props;

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
