import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddTeam from '../referee/teams/TeamForm';
import UserTeams from '../referee/teams/TeamList';

import * as teamActions from '../../actions/teams';

class TeamMaintenance extends Component {
  render() {
    return (
        <div>
          <div className="col-md-4">
            <UserTeams />
          </div>
          <div className="col-md-offset-1 col-md-4">
            <h2>Add Team</h2>
            <AddTeam />
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
      // teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch)
  };
}

export default TeamMaintenance;
