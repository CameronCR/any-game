import React, { Component } from 'react';

import SportFormManage from './SportFormManage';

class SportModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let value = new Date().toISOString();

    return(
      <div className="modal-body">
        <div className="col-md-8">
          <form>
            <div className="form-group">
              <label>Sport Name</label>
              <input type="text"
                     name="name"
                     className="form-control"
                     onChange={this.props.changeInput}
                     value={this.props.value.name} />
              <label>Opening Day</label>
              <label>{value}</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SportModal;
