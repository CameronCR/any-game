import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsersListPreview extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <li className="list-group-item" data-toggle="modal" data-target="#userModal">
        {this.props.user.firstName} {this.props.user.lastName}
      </li>
    );
  }
}

export default UsersListPreview;
