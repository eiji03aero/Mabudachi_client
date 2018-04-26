import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import uuid from 'uuid/v4';

import TodoListItem from '../../organisms/TodoListItem';
import TodoInput from '../../organisms/TodoInput';
import TodoEditModal from '../../organisms/TodoEditModal';
import styles from './style.js';

import { Todo, initialTodoState } from '../../../models/Todo';
const data = require('../../../models/todos.json');

interface Props { }

interface State {
  todos: Todo[];
  editingTodo: Todo;
  isModalOpen: boolean;
}

class Screen3 extends Component<Props,State> {
  constructor (props: any) {
    super(props);
    this.state = {
      todos: data.todos,
      editingTodo: initialTodoState,
      isModalOpen: false,
    }
  }

  public handleSubmit (text: string) {
    const newTodo = {
      id: uuid(),
      title: text,
      description: 'here comes your newly created todo man!',
      isCompleted: false,
    }

    this.setState((pre, cur) => ({
      todos: [
        ...pre.todos,
        newTodo
      ]
    }))
  }

  public handleOpenEdit (id: string) {
    const todo = this.state.todos.filter((i) => i.id === id)[0];

    this.setState((pre) => ({
      editingTodo: todo,
      isModalOpen: true
    }))
  }

  public handleCloseEdit () {
    this.setState((pre) => ({
      editingTodo: initialTodoState,
      isModalOpen: false
    }))
  }

  public handleDelete (id: string) {
    this.setState((pre, cur) => ({
      todos: pre.todos.filter((t) => t.id !== id)
    }))
  }

  public handleCompletedChange (p: {id: string, isChecked: boolean}) {
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

  public render () {
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
