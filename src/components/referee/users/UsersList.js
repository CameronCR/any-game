import React, { Component } from 'react';

import UsersListPreview from './UsersListPreview';

import * as userActions from '../../../actions/users';

class UsersList extends Component {

  userListing(user, index) {
    const handleUserClick = () => this.props.setUser(user);
    return <UsersListPreview user={user} key={index} handleClick={handleUserClick} />;
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
