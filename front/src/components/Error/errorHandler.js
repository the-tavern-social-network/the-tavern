import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
  
import { clearError } from '../../../src/actions/error';
  
class ErrorHandler extends React.Component{
    constructor(props){
        super(props);
  
        this.state = {
            showError: false
        };
    }
  
    componentDidUpdate(prevProps) {
        // Check error message.
        if(this.props.error.hasOwnProperty('message') &&
            (!prevProps.error.hasOwnProperty('message') || this.props.error.date !== prevProps.error.date)) {
            this.setState({showError: true});
        }
    }
  
    handleClick = () => {
        this.props.clearError();
        this.setState({showError: false});
    }
  
    render() {
        return this.state.showError && <div >
            <h2>Error: {this.props.error.type}</h2>
            <p>{this.props.error.message}</p>
            <button onClick={this.handleClick} />
        </div>
    }
}
  
ErrorHandler.propTypes = {
    error: PropTypes.object,
    clearError: PropTypes.func
}
  
const mapStateToProps = state => ({
    error: state.error
});
  
const mapDispatchToProps = dispatch => {
    return {
        clearError: () => { dispatch(clearError()); }
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorHandler);