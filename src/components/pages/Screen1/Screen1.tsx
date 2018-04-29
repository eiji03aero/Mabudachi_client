import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';

interface Props {
  isPushed: boolean;
  onButtonPushed: () => any;
}

class Screen1 extends Component<Props,{}> {
  constructor (props: any) {
    super(props);
  }

  public handlePress () {
    const { onButtonPushed } = this.props;
    onButtonPushed();
  }

  public render () {
    const { isPushed } = this.props;
    const textContent = isPushed
      ? 'aint pushed yet'
      : 'you are brave as hell man';

    return (
      <View>
        <Text>Screen1</Text>
        <Button
          title='push me!'
          onPress={() => this.handlePress()} />
        <Text>{ textContent }</Text>
      </View>
    );
  }
}

export default Screen1;
