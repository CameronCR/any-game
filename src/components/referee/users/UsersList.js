import React, { Component } from 'react';

import * as userActions from '../../../actions/users';

import UsersListPreview from './UsersListPreview';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.userListing = this.userListing.bind(this);
  }

  userListing(user, index) {
    const handleUserClick = () => this.props.setUser(user);
    return <UsersListPreview user={user} key={index} handleClick={handleUserClick} />;
  }

  render(){
    return(
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.users.map(this.userListing)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
