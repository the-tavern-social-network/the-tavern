import { connect } from 'react-redux';

import Field from '../../components/Field/Field';
import { changeValue } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.reducerName][ownProps.name],
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeValue: (value) => dispatch(changeValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
