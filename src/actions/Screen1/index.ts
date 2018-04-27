import C from '../../store/constants';
import { Action } from '../../models/redux/action';

export function buttonPushed (): Action {
  return { type: C.S1_BUTTON_PUSHED };
}
