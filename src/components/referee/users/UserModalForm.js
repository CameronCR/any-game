import React, { Component } from 'react';

function UserModalForm(props) {
    return(
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text"
                 name="firstName"
                 className="form-control"
                 value={props.user.firstName}
                 placeholder="First Name"/>
           <input type="text"
                  name="lastName"
                  className="form-control"
                  value={props.user.lastName}
                  placeholder="Last Name" />
        </div>
      </form>
    );
}

export default UserModalForm;
