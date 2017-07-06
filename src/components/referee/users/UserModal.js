import React, { Component } from 'react';

import UserModalForm from './UserModalForm';

function UserModal(props) {
  return(
    <div>
      <div className="modal fade" id="userModal" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userModalLabel">{props.modalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-md-8">
                <UserModalForm {...props} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.saveButton}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
