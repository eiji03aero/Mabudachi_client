import { Todo } from '../Todo';

export interface Screen3State {
  todos: Todo[];
  editingTodo: Todo;
  isModalOpen: boolean;
}
