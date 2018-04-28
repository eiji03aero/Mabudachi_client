import { connect } from 'react-redux';
import Screen1 from './Screen1';
import { Screen1State } from '../../../models/states/Screen1';
import { buttonPushed } from '../../../actions/Screen1';

function mapStateToProps (state: any): Screen1State {
  return {
    isPushed: state.Screen1.isPushed,
  };
}

function mapDispatchToProps (dispatch: any): any {
  return {
    onButtonPushed: () => dispatch(buttonPushed()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
