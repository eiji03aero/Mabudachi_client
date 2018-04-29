import C from '../store/constants';
import { Action } from '../models/redux/action';
import { StateProps } from '../models/containers/Screen3';
import { Todo, createNewTodo } from '../models/Todo';
const data = require('../../assets/data/todos');

const initialState: StateProps = {
  todos: data.todos,
  editingTodo: createNewTodo(),
  isModalOpen: false,
};

function Screen3Reducer (state: StateProps = initialState, action: Action): StateProps {
  switch (action.type) {
    case C.S3_SUBMIT_TODO:
    case C.S3_DELETE_TODO:
    case C.S3_TOGGLE_COMPLETED:
      return {
        ...state,
        todos: todosReducer(state.todos, action)
      };

    case C.S3_TOGGLE_EDIT_MODAL:
      const { isModalOpen, editingTodo } = action.payload;
      return {
        ...state,
        isModalOpen,
        editingTodo,
      };
    default:
      return state;
  };
}

function todosReducer (state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case C.S3_SUBMIT_TODO: {
      const { id, title, description, isCompleted } = action.payload;
      const newTodo = {
        id,
        title,
        description,
        isCompleted,
      };
      return [
        newTodo,
        ...state
      ];
    }

    case C.S3_DELETE_TODO: {
      const { id } = action.payload;
      return state.filter(d => d.id !== id);
    }

    case C.S3_TOGGLE_COMPLETED: {
      const { id } = action.payload;
      return state.map(d => {
        if (d.id === id) {
          d.isCompleted = !d.isCompleted;
        }
        return d;
      });
    }

    default:
      return state;
  };
}

export default Screen3Reducer;
