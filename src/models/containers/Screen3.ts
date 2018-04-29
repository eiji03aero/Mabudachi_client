import { Todo } from '../Todo';

export interface StateProps {
  todos: Todo[];
  editingTodo: Todo;
  isModalOpen: boolean;
}

export interface DispatchProps {
    onSubmitTodo: (title: string) => any;
    onDeleteTodo: (id: string) => any;
    onToggleEditModal: (operation: string, todo: Todo) => any;
    onToggleCompleted: (id: string) => any;
}
