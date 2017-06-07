import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as teamActions from '../../../actions/teams';

import TeamsListPreview from './TeamsListPreview';

class TeamList extends Component {

  componentWillMount(){
    this.props.teamActions.loadTeams();
  }

  teamListing(team, index){
    return <TeamsListPreview team={team} key={index} />;
  }

  render() {
    return (
        <div className="col-md-4">
          <div className="list-group">
            {this.props.teams.map(this.teamListing)}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);