export interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export const initialTodoState = {
  id: '',
  title: '',
  description: '',
  isCompleted: false,
};
