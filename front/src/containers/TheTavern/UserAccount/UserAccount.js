import { connect } from 'react-redux';

import UserAccount from '../../../sections/TheTavern/UserAccount/UserAccount';

import { setIsEditing, editUserAccount, deleteAcount } from '../../../actions';

const mapStateToProps = (state) => ({
  isEditing: state.user.isEditing,
  user: state.user.loggedUser,
});

const mapDispatchToProps = (dispatch) => ({
  setIsEditing: () => dispatch(setIsEditing()),
  editUserAccount: () => dispatch(editUserAccount()),
  deleteAcount: (userId) => dispatch(deleteAcount(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
