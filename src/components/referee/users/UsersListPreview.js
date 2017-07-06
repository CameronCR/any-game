import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function UsersListPreview(props) {
    return(
      <li onClick={props.handleClick} className="list-group-item" data-toggle="modal" data-target="#userModal">
        {props.user.settings.firstName + ' ' + props.user.settings.lastName}
      </li>
    );
}

export default UsersListPreview;
