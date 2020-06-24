import { connect } from 'react-redux';

import Welcome from '../../components/Welcome/Welcome';

const mapStateToProps = (state) => ({
  user: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
