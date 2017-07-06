import React, { Component } from 'react';

import UsersListPreview from './UsersListPreview';

import * as userActions from '../../../actions/users';

class UsersList extends Component {

  handleUserClick(user){
    this.props.setUser(user);
  }

  userListing(user, index) {
    return <UsersListPreview user={user} key={index} handleClick={() => {this.handleUserClick(user)}} />;
  }

  render(){
    return(
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.users.map(this.userListing.bind(this))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
