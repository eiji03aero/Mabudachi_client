import C from '../store/constants';
import { Action } from '../models/redux/action';
import { StateProps } from '../models/containers/Screen1';

const initialState: StateProps = {
  isPushed: false,
};

function Screen1Reducer (state: StateProps = initialState, action: Action): StateProps {
  switch (action.type) {
    case C.S1_BUTTON_PUSHED:
      return { isPushed: !state.isPushed };

    default:
      return state;
  }
}

export default Screen1Reducer;
