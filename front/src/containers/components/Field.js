import { connect } from 'react-redux';

import Field from '../../components/Field/Field';
import { inputChange, unsetError } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.reducerName][ownProps.name],
  hasError: state.global.hasError,
});

const mapDispatchToProps = (dispatch) => ({
  inputChange: (name, value, reducerName) => dispatch(inputChange(name, value, reducerName)),
  unsetError: () => dispatch(unsetError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
