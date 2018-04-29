import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import TodoListItem from '../../organisms/TodoListItem';
import TodoInput from '../../organisms/TodoInput';
import TodoEditModal from '../../organisms/TodoEditModal';
import styles from './style.js';

import { initialTodoState } from '../../../models/Todo';
import { StateProps, DispatchProps } from '../../../models/containers/Screen3';

type Props = StateProps & DispatchProps;

interface State { }

class Screen3 extends Component<Props,State> {
  constructor (props: any) {
    super(props);
  }

  public handleSubmit (title: string) {
    const { onSubmitTodo } = this.props;
    onSubmitTodo(title);
  }

  public handleOpenEdit (id: string) {
    const { onToggleEditModal, todos } = this.props;
    const todo = todos.filter((i) => i.id === id)[0];
    onToggleEditModal('open', todo);
  }

  public handleCloseEdit () {
    const { onToggleEditModal } = this.props;
    onToggleEditModal('close', initialTodoState);
  }

  public handleDelete (id: string) {
    const { onDeleteTodo } = this.props;
    onDeleteTodo(id);
  }

  public handleCompletedChange (id: string) {
    const { onToggleCompleted } = this.props;
    onToggleCompleted(id);
  }

  public render () {
    const { todos, isModalOpen, editingTodo } = this.props;

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
