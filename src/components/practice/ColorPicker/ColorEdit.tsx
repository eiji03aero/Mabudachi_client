import React from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';

import { Colors } from './Colors';

interface Props {
  color: keyof Colors;
  onColorChange: (payload: any) => void;
}

function ColorEdit (props: Props) {
  const { onColorChange, color } = props;

  const handleSlidingComplete =  (v: number) => {
    const value = v.toString();
    const payload = {
      color,
      value,
    };

    onColorChange(payload);
  };

  return (
    <View style={styles.ColorEditContainer}>

      <Text style={styles.ColorEditText}>
        { color }
      </Text>

      <Slider
        style={styles.ColorEditSlider}
        step={1}
        minimumValue={1}
        maximumValue={255}
        onSlidingComplete={(v) => handleSlidingComplete(v)} />

    </View>
  );
}

const styles = StyleSheet.create({
  ColorEditContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ColorEditText: {
    padding: 5,
    width: 50,
  },
  ColorEditSlider: {
    flex: 1,
    padding: 5,
  },
});

export default ColorEdit;
