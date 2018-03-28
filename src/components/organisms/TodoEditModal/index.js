import React, { Component } from 'react'
import {
  Text,
  Button,
  TextInput,
  View,
} from 'react-native';
import Modal from 'react-native-modalbox';

import styles from './style.js';

class TodoEditModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  componentWillReceiveProps (next) {
    const { title, description } = next.todo;
    this.setState((pre) => ({
      title,
      description
    }))
  }

  handleClose () {
    this.props.onClose();
  }

  render () {
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
