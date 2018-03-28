import React, { Component } from 'react'
import {
  TextInput,
} from 'react-native';

import styles from './style.js';

class TodoInput extends Component {

  handleSubmit () {
    const { onSubmit } = this.props;
    const { textInput } = this;

    onSubmit(textInput._lastNativeText);
    textInput.clear();
  }

  render () {
    return (
      <TextInput
        ref={(el) => this.textInput = el}
        placeholder='Punch in your todo!'
        style={styles.todoInputContainer}
        placeholderTextColor='#ffffff'
        onSubmitEditing={() => this.handleSubmit()} />
    )
  }
}

export default TodoInput;
