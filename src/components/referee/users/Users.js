import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UsersList from './UsersList';

import * as userActions from '../../../actions/users';

class Users extends Component {
  componentWillMount(){
    this.props.userActions.loadUsers();
  }

  render(){
    return(
      <div>
        <h1>Users Admin</h1>
        <UsersList />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
