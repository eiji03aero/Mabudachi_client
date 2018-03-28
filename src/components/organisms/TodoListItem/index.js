import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '../../atoms/CheckBox';
import styles from './style.js';
import colors from '../../../styles/colors.js';

class TodoListItem extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleCompletedChange (isChecked) {
    const { onCompletedChange, id } = this.props;
    const params = {
      isChecked,
      id
    }

    onCompletedChange(params);
  }

  handlePressOnTitle () {
    const { isOpen } = this.state;

    this.setState(() => ({ isOpen: !this.state.isOpen }))
  }

  handleEdit () {
    const { id, onOpenEdit } = this.props;

    onOpenEdit(id);
  }

  handleDelete () {
    const { id, onDelete } = this.props;
    onDelete(id);
  }

  render() {
    const { id, title, description, isCompleted } = this.props;
    const { isOpen } = this.state;

    return (
      <View style={[
        styles.listItemContainer,
        isCompleted && styles.listItemContainer_Completed]}>

        <View style={styles.listItemCheckBoxContainer}>
          <CheckBox
            isChecked={isCompleted}
            activeColor="#5555ff"
            onPress={(c) => this.handleCompletedChange(c)} />
        </View>

        <View style={styles.listItemContent}>

          <TouchableOpacity onPress={() => this.handlePressOnTitle()}>
            <Text style={isCompleted ? styles.listItemTitle_Completed : ''}>{title}</Text>
          </TouchableOpacity>

          <View style={[
            styles.listItemDescriptionBox,
            isOpen && { display: 'flex' } ]}>

            <Text>{description}</Text>

          </View>

        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => this.handleEdit()}>
          <Text>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => this.handleDelete()}>
          <Text>Delete</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

export default TodoListItem;
