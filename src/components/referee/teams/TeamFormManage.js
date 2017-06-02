import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TeamForm from './TeamForm';

import * as teamsActions from '../../../actions/teams';
import * as sportActions from '../../../actions/sports';

class TeamFormManage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      team: Object.assign({}, props.team),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }


  updateCourseState(event) {
    const field = event.target.name;
    let team = this.state.team;
    team[field] = event.target.value;
    return this.setState({team: team});
  }


  componentDidMount(){
    this.props.sportActions.loadSports();
  }


  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.teamActions.saveTeam(this.state.team);
  }

  render() {
    return (
        <div className="col-md-4">
          <TeamForm
              team={this.props.team}
              allSports={this.props.sports}
              onSave={this.saveCourse}
              onChange={this.updateCourseState}
              saving={this.state.saving}
              errors={this.state.errors}
          />
        </div>
    );
  }
}

TeamFormManage.propTypes = {
  teams: PropTypes.array,
  teamActions: PropTypes.object
};


function getTeamByName(teams, name) {
  const team = teams.filter(team => team.name == name);
  if (team) return team[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let team = {city: '', location: '', name: ''};

  if (ownProps.match.params.teamName) {
    const teamId = ownProps.match.params.teamName;
    team = getTeamByName(state.teams, teamId);
  }

  console.log(state)
  return {
    team: team,
    sports: state.sports,
    currentlyLoading: state.currentlyLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamsActions, dispatch),
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamFormManage);
