import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as settingsActions from '../../actions/settings';
import RefereeRouter from '../../routers/RefereeRouter';
import RefereeHeader from  './RefereeHeader';
import RefereeSidebar from "./RefereeSidebar";

class RefereeConsole extends Component {

  render() {
    return (
      <div>
        <RefereeHeader />
        <div className="container-fluid">
          <div className="row">
            <RefereeSidebar path={this.props.location.pathname} />
            <RefereeRouter/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    settingsActions: bindActionCreators(settingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RefereeConsole);
