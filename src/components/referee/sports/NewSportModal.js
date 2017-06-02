import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import SportFormManage from './SportFormManage';

class NewSportModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }

  render() {
    return(
        <div>
          <div className="btn btn-default" onClick={this.open}>
            New Sport
          </div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>New Sport</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div><SportFormManage /></div>
            </Modal.Body>
            <Modal.Footer>
              <div className="btn btn-default" onClick={this.close}>Close</div>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default NewSportModal;