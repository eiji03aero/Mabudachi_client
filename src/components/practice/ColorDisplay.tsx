import React from 'react';
import {
  View,
} from 'react-native';
import { Colors } from './Colors';

interface Props {
  colors : Colors;
}

function ColorDisplay (props : Props) {
  const { colors } = props;
  const style = {
    height: 200,
    backgroundColor: `rgb(${colors.red},${colors.green},${colors.blue})`
  }

  return (
    <View style={style}></View>
  )
}

export default ColorDisplay;
