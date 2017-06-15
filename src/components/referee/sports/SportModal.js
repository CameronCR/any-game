import React, { Component } from 'react';

import SportFormManage from './SportFormManage';

class SportModal extends Component {

  constructor(props) {
    super(props);


    this.updateFormState = this.updateFormState.bind(this);
  }

  updateFormState(event) {
    const field = event.target.name;
    let sport = this.state.sport;
    sport[field] = event.target.value;
    return this.setState({sport: sport});
  }

  onClick() {
    console.log(this.state.sport);
    console.log('Saving');
  }

  render() {
    return(
      <div>
        <div className="modal fade" id="sportModal" role="dialog" aria-labelledby="sportModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="sportModalLabel">{this.props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <SportFormManage sport={this.state.sport} updateForm={this.updateFormState} />
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