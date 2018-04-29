import { connect } from 'react-redux';
import Screen1 from './Screen1';
import { StateProps, DispatchProps } from '../../../models/containers/Screen1';
import { buttonPushed } from '../../../actions/Screen1';

function mapStateToProps (state: any): StateProps {
  return {
    isPushed: state.Screen1.isPushed,
  };
}

function mapDispatchToProps (dispatch: any): DispatchProps {
  return {
    onButtonPushed: () => dispatch(buttonPushed()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
