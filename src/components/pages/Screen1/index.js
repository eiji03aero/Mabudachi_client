import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';

class Screen1 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: 'aint pushed yet'
    }
  }

  handlePress () {
    this.setState((pre) => ({
      text: 'you are brave as hell man'
    }))
  }

  render () {
    return (
      <View>
        <Text>Screen1</Text>
        <Button
          title='push me!'
          onPress={() => this.handlePress()} />
        <Text>{ this.state.text }</Text>
      </View>
    )
  }
}

export default Screen1
