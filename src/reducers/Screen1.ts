import C from '../store/constants';
import { Action } from '../models/redux/action';
import { Screen1State } from '../models/states/Screen1';

const initialState: Screen1State = {
  isPushed: false,
};

function Screen1Reducer (state: Screen1State = initialState, action: Action): Screen1State {
  switch (action.type) {
    case C.S1_BUTTON_PUSHED:
      return { isPushed: !state.isPushed };

    default:
      return state;
  }
}

export default Screen1Reducer;
