import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as teamActions from '../../../actions/teams';
import * as sportActions from '../../../actions/sports';

import List from '../common/List';
import Modal from '../common/Modal';
import TeamsListPreview from './TeamsListPreview';
import TeamModalForm from './TeamModalForm';

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
    this.filterBySport = this.filterBySport.bind(this);
    this.setTeam = this.setTeam.bind(this);
    this.createTeam = this.createTeam.bind(this);
    this.removeTeam = this.removeTeam.bind(this);
    this.clearTeam = this.clearTeam.bind(this);
  }

  componentWillMount() {
    this.props.teamActions.loadTeams();
    this.props.sportActions.loadSports();
  }

  updateFormState(event) {
    const field = event.target.name;
    let team = this.state.team;
    team[field] = event.target.value;
    this.setState({team: team});
  }

  filterBySport(event) {
    let selection = event.target.value;
    if (selection == "all"){
      this.props.teamActions.loadTeams();
    } else {
      this.props.teamActions.loadTeamsBySport(selection);
    }
  }

  setTeam(team) {
    let title = 'Edit ' + team.name;
    this.setState({
      team: team,
      modalTitle: title
    });
  }

  createTeam() {
    this.props.teamActions.saveTeam(this.state.team);
  }

  removeTeam() {
    this.props.teamActions.removeTeam(this.state.team);
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
          <div className="row col-md-10">
            <button className="btn btn-outline-primary" data-toggle="modal" data-target="#teamModal" onClick={this.clearTeam}>
              New Team
            </button>
            <div className="col-md-3">
              <select name="sport"
                      className="form-control"
                      onChange={this.filterBySport} >
                <option value="all">All Sports</option>
                {this.props.sports.map((option) => {
                  return <option key={option.name} value={option.name}>{option.name}</option>;
                })}
              </select>
            </div>
          </div>
          <Modal item={this.state.team}
                 modalTitle={this.state.modalTitle}
                 saveButton={this.createTeam}
                 deleteButton={this.removeTeam}
                 onChange={this.updateFormState}
                 sports={this.props.sports}
                 modalForm={TeamModalForm} />
          <br />
          <List list={this.props.teams}
                setTeam={this.setTeam}
                previewComponent={TeamsListPreview} />
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
    teamActions: bindActionCreators(teamActions, dispatch),
    sportActions: bindActionCreators(sportActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Teams);
