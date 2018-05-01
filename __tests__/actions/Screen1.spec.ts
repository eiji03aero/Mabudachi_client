import { C, Action } from '../utils';
import { buttonPushed } from '../../src/actions/Screen1';

describe('[action] buttonPushed', () => {
  it('buttonPushed() to be the right action', () => {
    const action = {
      type: C.S1_BUTTON_PUSHED,
    };
    expect(buttonPushed()).toEqual(action);
  })
})
