import { connect } from 'react-redux';

import Field from '../../components/Field/Field';
import { inputChange } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.reducerName][ownProps.name],
});

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: (name, value, reducerName) => dispatch(inputChange(name, value, reducerName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
