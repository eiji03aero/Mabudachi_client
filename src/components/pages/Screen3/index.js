import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modalbox';
import uuid from 'uuid/v4';

import TodoListItem from '../../organisms/TodoListItem';
import TodoInput from '../../organisms/TodoInput';
import TodoEditModal from '../../organisms/TodoEditModal';
import styles from './style.js';

import { todos } from '../../../models/todos.json';

class Screen3 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: todos,
      editingTodo: {},
      isModalOpen: false
    }
  }

  handleSubmit (text) {
    const { todos } = this.state;
    const newTodo = {
      id: uuid(),
      title: text,
      description: 'here comes your newly created todo man!'
    }

    this.setState((pre, cur) => ({
      todos: [
        ...pre.todos,
        newTodo
      ]
    }))
  }

  handleOpenEdit (id) {
    const todo = this.state.todos.filter((i) => i.id === id)[0];

    this.setState((pre) => ({
      editingTodo: todo,
      isModalOpen: true
    }))
  }

  handleCloseEdit () {
    this.setState((pre) => ({
      editingTodo: {},
      isModalOpen: false
    }))
  }

  handleDelete (id) {
    const { todos } = this.state;

    this.setState((pre, cur) => ({
      todos: pre.todos.filter((t) => t.id !== id)
    }))
    console.log(id);
  }

  handleCompletedChange (p) {
    const { id, isChecked } = p;
    const { todos } = this.state;
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.isCompleted = isChecked;
      }
      return t;
    })

    this.setState(() => ({
      todos: newTodos
    }))
  }

  render () {
    const { todos, isModalOpen, editingTodo } = this.state;

    return (
      <View style={styles.todoPageContainer}>

        <View style={styles.todoPageHeaderContainer}>
          <Text>Header comes here</Text>
        </View>

        <FlatList
          data={todos}
          renderItem={({item}) => {
            return (
              <TodoListItem
                onOpenEdit={(id) => this.handleOpenEdit(id)}
                onDelete={(id) => this.handleDelete(id)}
                onCompletedChange={(p) => this.handleCompletedChange(p)}
                todo={item} />
            )}}
          keyExtractor={(item,index) => index.toString()}
          style={styles.todoPageMainContainer} />

        <TodoInput
          onSubmit={(text) => this.handleSubmit(text)} />

        <TodoEditModal
          isOpen={isModalOpen}
          onClose={() => this.handleCloseEdit()}
          todo={editingTodo} />

      </View>
    )
  }
}

export default Screen3;
