import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UsersListPreview from './UsersListPreview';

import * as userActions from '../../../actions/users';

class UsersList extends Component {

  userListing(user, index) {
    return <UsersListPreview user={user} key={index}/>;
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
