import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SportForm from './SportForm';

import * as sportActions from '../../../actions/sports';

class SportFormManage extends Component {

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-8">
        <form>
          <div className="form-group">
            <label>Sport Name</label>
            <input type="text"
                   name="name"
                   className="form-control"
                   onChange={this.props.updateForm}
                   value={this.props.sport.name} />
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    sports: state.sports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SportFormManage);