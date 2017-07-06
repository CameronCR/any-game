import React, { Component } from 'react';

function UserModalForm(props) {
    return(
      <form role="form" className="form-horizontal">
        <div className="form-group">
          <label>Name</label>
          <input type="text"
                 name="firstName"
                 className="form-control"
                 value={props.user.firstName}
                 onChange={props.onChange}
                 placeholder="First Name"/>
           <input type="text"
                  name="lastName"
                  className="form-control"
                  value={props.user.lastName}
                  onChange={props.onChange}
                  placeholder="Last Name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text"
            name="email"
            className="form-control"
            value={props.user.email}
            onChange={props.onChange}
            placeholder="Email"
                />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password"
                 name="password"
                 className="form-control"
                 value={props.user.password}
               onChange={props.onChange} />
        </div>
      </form>
    );
}

export default UserModalForm;
