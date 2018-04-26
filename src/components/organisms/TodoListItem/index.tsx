import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '../../atoms/CheckBox';
import { Todo } from '../../../models/Todo';
import styles from './style';

interface Props {
  onOpenEdit: (id: string) => any;
  onDelete: (id: string) => any;
  onCompletedChange: (p: any) => any;
  todo: Todo
}

interface State {
  isOpen: boolean
}

class TodoListItem extends Component<Props, State> {

  constructor (props: any) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleCompletedChange (isChecked: boolean) {
    const { onCompletedChange, todo: { id } } = this.props;
    const params = {
      isChecked,
      id
    }

    onCompletedChange(params);
  }

  handlePressOnTitle () {
    this.setState((pre) => ({ isOpen: !pre.isOpen }))
  }

  handleEdit () {
    const { onOpenEdit, todo: { id } } = this.props;

    onOpenEdit(id);
  }

  handleDelete () {
    const { onDelete, todo: { id } } = this.props;
    onDelete(id);
  }

  render () {
    const { todo: { title, description, isCompleted } } = this.props;
    const { isOpen } = this.state;

    return (
      <View style={[
        styles.listItemContainer,
        isCompleted && styles.listItemContainer_Completed]}>

        <View style={styles.listItemCheckBoxContainer}>
          <CheckBox
            isChecked={isCompleted}
            activeColor="#5555ff"
            onPress={(c: any) => this.handleCompletedChange(c)} />
        </View>

        <View style={styles.listItemContent}>

          <TouchableOpacity onPress={() => this.handlePressOnTitle()}>
            <Text style={isCompleted ? styles.listItemTitle_Completed : null}>{title}</Text>
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
