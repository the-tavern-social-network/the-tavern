import { connect } from 'react-redux';

import UserAccount from '../../../sections/TheTavern/UserAccount/UserAccount';

import { setIsEditing, editUserAccount } from '../../../actions';

const mapStateToProps = (state) => ({
  isEditing: state.user.isEditing,
  user: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  setIsEditing: () => dispatch(setIsEditing()),
  editUserAccount: () => dispatch(editUserAccount())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
