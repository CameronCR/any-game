import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { deleteButton } from './Buttons';

function Modal(props) {
  const ModalForm = props.modalForm;
  return(
    <div>
      <div className="modal fade" id="modal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">{props.modalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-md-8">
                <ModalForm {...props} />
              </div>
            </div>
            <div className="modal-footer">
              {deleteButton(props.item.name, props.deleteButton)}
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.saveButton}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalForm: PropTypes.func.isRequired
};

export default Modal;
