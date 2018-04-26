import React, { Component } from 'react';
import {
  Text,
  Button,
  TextInput,
  View,
} from 'react-native';
import Modal from 'react-native-modalbox';
import { Todo } from '../../../models/Todo';

import styles from './style.js';

interface Props {
  todo: Todo;
  isOpen: boolean;
  onClose: () => void;
}

interface State {
  title: string;
  description: string;
}

class TodoEditModal extends Component<Props, State> {
  public constructor (props: any) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  public componentWillReceiveProps (next: Props) {
    const { title, description } = next.todo;
    this.setState((pre) => ({
      title,
      description
    }))
  }

  public handleClose () {
    this.props.onClose();
  }

  public render () {
    const { isOpen } = this.props;
    const { title, description } = this.state;

    console.log(this.props);

    return (
      <Modal
        style={styles.editModalContainer}
        isOpen={isOpen}
        onClosed={() => this.handleClose()}>

        <View style={styles.editModalBox}>

          <Text>Title</Text>
          <TextInput
            value={title}
            onChangeText={(title) => this.setState({ title })} />

          <Text>Description</Text>
          <TextInput
            value={description}
            onChangeText={(description) => this.setState({ description })} />

        </View>

        <Button title="close modal" onPress={() => this.handleClose()}></Button>

      </Modal>
    )
  }
}

export default TodoEditModal;
