import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ColorDisplay from './ColorDisplay';
import ColorEdit from './ColorEdit';
import { Colors } from './Colors';

interface State {
  colors : Colors;
}

interface Payload {
  color : keyof Colors;
  value : string;
}

class ColorPicker extends Component<{}, State> {

  constructor (props : any) {
    super(props);
    this.state = {
      colors: {
        green: '0',
        blue: '0',
        red: '0',
      }
    };

    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange (payload : Payload) {
    const { colors } = this.state;
    const { color, value } = payload;
    const newColors = {
      ...colors,
      [ color ]: value
    };

    this.setState({ colors: newColors });
  }

  render () {
    const { colors } = this.state;
    const colorString = Object.keys(colors)
                              .map((key : string) => key + ': ' + colors[key])
                              .join('\n')

    return (
      <View>

        <ColorDisplay colors={colors} />

        <Text>
          {colorString}
        </Text>

        <ColorEdit
          color={'blue'}
          onColorChange={this.handleColorChange} />

        <ColorEdit
          color={'red'}
          onColorChange={this.handleColorChange} />

        <ColorEdit
          color={'green'}
          onColorChange={this.handleColorChange} />

      </View>
    )
  }
}

export default ColorPicker;
