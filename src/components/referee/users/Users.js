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
  }

  componentWillMount(){
    this.props.userActions.loadUsers();
  }

  setUser(user){
    let title = 'Edit ' + user.firstName;
    this.setState({
      user: user
    });
  }

  clearUser(){
    this.setState({
      user: {
        firstName: '',
        lastName: ''
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Users Admin</h1>
        <button className="btn btn-outline-primary" data-toggle="modal" data-target="#userModal" onClick={this.clearUser}>
          New User
        </button>
        <UserModal user={this.state.user}/>
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
