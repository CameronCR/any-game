import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as settingsActions from '../../actions/settings';
import * as teamActions from '../../actions/teams';
import RefereeRouter from '../../routers/RefereeRouter';
import RefereeHeader from  './RefereeHeader';
import RefereeSidebar from "./RefereeSidebar";
import RefereeLoading from './RefereeLoading';

class RefereeConsole extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.settingsActions.loadSettings();
  }

  render() {
    const { isFetching } = this.props.settings;
    if(isFetching) {
      return (
        <RefereeLoading />
      );
    }
    return (
      <div>
        <RefereeHeader />
        <div className="container-fluid">
          <div className="row">
            <RefereeSidebar path={this.props.location.pathname} />
            <RefereeRouter settings={this.props.settings} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch),
    settingsActions: bindActionCreators(settingsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RefereeConsole);
