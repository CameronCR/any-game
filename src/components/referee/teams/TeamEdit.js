import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamFormManage from './TeamFormManage';

import * as teamActions from '../../../actions/teams';

class TeamEdit extends Component {

  render() {
    return(
        <div>
          <div className="col-md-4">
            <h2>Edit {this.props.match.params.teamName}</h2>
            <TeamFormManage type="edit" teamName={this.props.match.params.teamName} />
          </div>
        </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    team: state.team,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamEdit);
