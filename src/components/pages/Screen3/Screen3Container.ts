import { connect } from 'react-redux';

import Screen3 from './Screen3';
import * as actions from '../../../actions/Screen3';
import { StateProps, DispatchProps } from '../../../models/containers/Screen3';
import { Todo } from '../../../models/Todo';

function mapStateToProps (state: any): StateProps {
  const { todos, editingTodo, isModalOpen } = state.Screen3;
  return {
    todos,
    editingTodo,
    isModalOpen,
  };
}

function mapDispatchToProps (dispatch: any): DispatchProps {
  return {
    onSubmitTodo: (title: string) => dispatch(actions.submitTodo(title)),
    onDeleteTodo: (id: string) => dispatch(actions.deleteTodo(id)),
    onToggleEditModal: (operation: string, todo: Todo) => dispatch(actions.toggleEditModal(operation, todo)),
    onToggleCompleted: (id: string) => dispatch(actions.toggleCompleted(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen3);
