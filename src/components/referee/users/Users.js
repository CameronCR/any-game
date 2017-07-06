import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UsersList from './UsersList';
import UserModal from './UserModal';

import * as userActions from '../../../actions/users';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: ''
      },
      modalTitle: 'Add a new User'
    };
    this.setUser = this.setUser.bind(this);
    this.clearUser = this.clearUser.bind(this);
  }

  componentWillMount(){
    this.props.userActions.loadUsers();
  }

  setUser(user){
    let title = 'Edit ' + user.settings.firstName;
    this.setState({
      user: {
        firstName: user.settings.firstName,
        lastName: user.settings.lastName
      },
      modalTitle: title
    });
  }

  clearUser(){
    this.setState({
      user: {
        firstName: '',
        lastName: ''
      },
      modalTitle: 'Add a new User'
    });
  }

  render(){
    return(
      <div>
        <h1>Users Admin</h1>
        <button className="btn btn-outline-primary" data-toggle="modal" data-target="#userModal" onClick={this.clearUser}>
          New User
        </button>
        <UserModal user={this.state.user} modalTitle={this.state.modalTitle}/>
        <br />
        <UsersList users={this.props.users} setUser={this.setUser} />
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
