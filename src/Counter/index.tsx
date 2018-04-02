import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

interface counterState {
  count: number;
}

class Counter extends Component<{}, counterState> {

  constructor (props: any) {
    super(props);
    this.state = this.init();
  }

  init () {
    return { count: 0 };
  }

  handleCount (op: string): void {
    let num: number;
    switch (op) {
      case 'down':
        num = -1;
        break;
      case 'up':
        num = 1;
        break;
      default:
        num = 0;
        console.log('something is wrong with this man');
    }

    this.setState(() => ({ count: num }));
  }

  render () {
    const { count } = this.state;
    return (
      <View>
        <Text>Here comes counter</Text>
        <Button
          title='count down'
          onPress={() => this.handleCount('down')} />
        <Button
          title='count up'
          onPress={() => this.handleCount('up')} />
        <Text>{count}</Text>
      </View>
    )
  }
}

export default Counter;
