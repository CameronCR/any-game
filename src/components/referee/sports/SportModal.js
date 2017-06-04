import React, { Component } from 'react';

import SportFormManage from './SportFormManage';

class SportModal extends Component {

  onClick() {
    this.child.onClickSave()
  }

  render() {
    return(
        <div>
          <button className="btn btn-outline-primary" data-toggle="modal" data-target="#newSportModal">
            New Sport
          </button>
          <div className="modal fade" id="newSportModal" role="dialog" aria-labelledby="newSportModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="newSportModalLabel">Add a New Sport</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <SportFormManage />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.onClick}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SportModal;