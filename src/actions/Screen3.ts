import uuid from 'uuid/v4';
import C from '../store/constants';
import { Action } from '../models/redux/action';
import { Todo, createNewTodo } from '../models/Todo';

export function submitTodo (title: string): Action {
  return {
    type: C.S3_SUBMIT_TODO,
    payload: {
      id: uuid(),
      title,
      description: 'here comes your newly created todo man!',
      isCompleted: false,
    },
  };
}

export function deleteTodo (id: string): Action {
  return {
    type: C.S3_DELETE_TODO,
    payload: {
      id,
    },
  };
}

export function toggleEditModal (operation: string, todo: Todo): Action {
  let isModalOpen = false;
  let editingTodo = createNewTodo();

  switch (operation) {
    case 'open':
      isModalOpen = true;
      editingTodo = todo;
      break;
    case 'close':
      break;
  }

  return {
    type: C.S3_TOGGLE_EDIT_MODAL,
    payload: {
      isModalOpen,
      editingTodo,
    }
  }
}

export function toggleCompleted (id: string): Action {
  return {
    type: C.S3_TOGGLE_COMPLETED,
    payload: {
      id,
    },
  };
}
