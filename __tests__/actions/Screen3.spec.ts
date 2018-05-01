import { C, Action } from '../utils';
import {
  submitTodo,
} from '../../src/actions/Screen3';

describe('[action] submitTodo', () => {
  it('submitTodo("osakabe") to be the right action', () => {
    const title = 'osakabe';
    const action = {
      type: C.S3_SUBMIT_TODO,
      payload: {
        title: title,
        description: 'here comes your newly created todo man!',
        isCompleted: false,
      },
    };
    const testAction = submitTodo(title);
    expect(testAction.title).toBe(action.title);
    expect(testAction.description).toBe(action.description);
    expect(testAction.isCompleted).toBe(action.isCompleted);
  });
});

