import { C, Action } from '../utils';
import Screen1Reducer, { initialState } from '../../src/reducers/Screen1';
import { buttonPushed } from '../../src/actions/Screen1';

describe('[reducer] Screen1Reducer', () => {
  it('Screen1Reducer should return right state when "C.S1_BUTTON_PUSHED" action received', () => {
    const state = Object.assign({}, initialState);
    const action = buttonPushed();
    const nextState = Screen1Reducer(state, action);
    expect(nextState.isPushed).not.toBe(state.isPushed);
  });

  it('Screen1Reducer should return default state when none of type matched', () => {
    const state = Object.assign({}, initialState);
    const action = { type: 'none' };
    const nextState = Screen1Reducer(state, action);
    expect(nextState).toEqual(state);
  });
});
