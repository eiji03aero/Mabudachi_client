import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';

interface Props { }

interface State {
  text: string;
}

class Screen1 extends Component<Props,State> {
  constructor (props: any) {
    super(props);
    this.state = {
      text: 'aint pushed yet',
    }
  }

  public handlePress () {
    this.setState((pre) => ({
      text: 'you are brave as hell man',
    }));
  }

  public render () {
    return (
      <View>
        <Text>Screen1</Text>
        <Button
          title='push me!'
          onPress={() => this.handlePress()} />
        <Text>{ this.state.text }</Text>
      </View>
    );
  }
}

export default Screen1;
