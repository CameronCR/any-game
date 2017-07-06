import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as teamActions from '../../../actions/teams';

import TeamsList from './TeamsList';
import TeamModal from './TeamModal';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        name: '',
        location: '',
        city: '',
        sport: ''
      },
      modalTitle: 'Add a new Team'
    };
    this.updateFormState = this.updateFormState.bind(this);
    this.setTeam = this.setTeam.bind(this);
    this.createTeam = this.createTeam.bind(this);
    this.clearTeam = this.clearTeam.bind(this);
  }

  componentWillMount() {
    this.props.teamActions.loadTeams();
  }

  updateFormState() {
    const field = event.target.name;
    let team = this.state.team;
    team[field] = event.target.value;
    this.setState({team: team});
  }

  setTeam(team) {
    let title = 'Edit ' + team.name;
    this.setState({
      team: team,
      modalTitle: title
    });
  }

  createTeam() {
    const userInput = this.state.team;
    this.props.teamActions.createTeam(userInput);
  }

  clearTeam() {
    this.setState({
      team: {
        name: '',
        location: '',
        city: '',
        sport: ''
      },
      modalTitle: 'Add a new Team'
    });
  }

  render() {
    return (
        <div>
          <h1>Teams Admin</h1>
          <button className="btn btn-outline-primary" data-toggle="modal" data-target="#teamModal" onClick={this.clearTeam}>
            New Team
          </button>
          <TeamModal team={this.state.team} modalTitle={this.state.modalTitle} saveButton={this.createTeam} onChange={this.updateFormState} sports={this.props.sports}/>
          <br />
          <TeamsList teams={this.props.teams} setTeam={this.setTeam} />
        </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    teams: state.teams,
    sports: state.sports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Teams);
