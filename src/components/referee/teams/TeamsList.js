import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import * as teamActions from '../../../actions/teams';

import TeamPreview from './TeamPreview';

class TeamList extends Component {

  componentWillMount(){
    this.props.teamActions.loadTeams();
  }

  teamListing(team, index){
    return <TeamPreview team={team} key={index} />;
  }

  render() {
    return (
        <div className="col-md-4">
          <div className="inline">
            <h2>Teams</h2><Link to="/referee/team" type="button" className="btn btn-default">New Team</Link>
          </div>
          <div className="list-group">
            {this.props.teams.map(this.teamListing)}
          </div>
        </div>
    );
  }
}

TeamList.propTypes = {
  teams: PropTypes.array,
  teamActions: PropTypes.object
};

TeamList.defaultProps = {
  teams: []
};

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