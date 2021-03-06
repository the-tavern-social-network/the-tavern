import { connect } from 'react-redux';

import AvatarsList from '../../../../sections/TheTavern/UserAccount/AvatarsList/AvatarsList';

import { updateAvatar, updateImage } from '../../../../actions';

const mapStateToProps = (state) => ({
    avatar: state.user.avatar,
});
const mapDispatchToProps = (dispatch) => ({
    updateAvatar: (avatar) => dispatch(updateAvatar(avatar)),
    updateImage: (avatar, user) => dispatch(updateImage(avatar, user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AvatarsList);
