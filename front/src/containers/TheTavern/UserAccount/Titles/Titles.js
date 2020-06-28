import { connect } from 'react-redux';

import Titles from '../../../../sections/TheTavern/UserAccount/Titles/Titles';

import { updateTitle } from '../../../../actions';

const mapStateToProps = (state) => ({
  defaultTitles: state.user.defaultTitles
});

const mapDispatchToProps = (dispatch) => ({
  updateTitle: (title) => dispatch(updateTitle(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Titles);
