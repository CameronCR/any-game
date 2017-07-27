import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as teamsActions from '../../../actions/teams';
import * as teamActions from '../../../actions/team';
import * as sportActions from '../../../actions/sports';
import * as venueActions from '../../../actions/venues';

import List from '../common/List';
import Modal from '../common/Modal';
import TeamModalForm from './TeamModalForm';

import { shortenFileName } from '../../../lib/utilities';
import teamsDevState from './TeamsDevState';

import * as firebase from '../../../lib/firebase';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        name: '',
        location: '',
        city: '',
        sport: '',
        slug: '',
        venue: '',
        fileName: '',
        seatingChart: {}
      },
      modalTitle: 'Add a new Team'
    };
    this.updateFormState = this.updateFormState.bind(this);
    this.filterBySport = this.filterBySport.bind(this);
    this.setTeam = this.setTeam.bind(this);
    this.createTeam = this.createTeam.bind(this);
    this.removeTeam = this.removeTeam.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.clearTeam = this.clearTeam.bind(this);
  }

  componentWillMount() {
    this.props.teamsActions.loadTeams();
    this.props.sportActions.loadSports();
    this.props.venueActions.loadVenues();
  }

  updateFormState(event) {
    const field = event.target.name;
    let team = this.state.team;
    team[field] = event.target.value;
    this.setState({team: team});
  }

  selectFile(event) {
    let team = this.state.team;
    team['seatingChart'] = event.target.files[0];
    team['fileName'] = shortenFileName(team.seatingChart.name);
    this.setState({team: team});
  }

  filterBySport(event) {
    let selection = event.target.value;
    if (selection == "all"){
      this.props.teamsActions.loadTeams();
    } else {
      this.props.teamsActions.loadTeamsBySport(selection);
    }
  }

  setTeam(team) {
    let title = 'Edit ' + team.name;
    //this.props.teamActions.loadSeatingChart(team);
    team['seatingChart'] = {};


    let ref = firebase.storage.ref('seatingChart');



    this.setState({
      team: team,
      modalTitle: title
    });
  }

  createTeam() {
    this.props.teamsActions.saveTeam(this.state.team);
  }

  removeTeam() {
    this.props.teamsActions.removeTeam(this.state.team);
  }

  clearTeam() {
    let dev = false;
    if(!dev) {
      this.setState({
        team: {
          name: '',
          location: '',
          city: '',
          sport: '',
          venue: '',
          fileName: '',
          slug: '',
          seatingChart: {}
        },
        modalTitle: 'Add a new Team'
      });
    } else {
      this.setState(teamsDevState);
    }
  }

  render() {
    return (
        <div>
          <h1>Teams Admin</h1>
          <div className="row col-md-10">
            <button className="btn btn-outline-primary" data-toggle="modal" data-target="#modal" onClick={this.clearTeam}>
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
                 onChange={this.updateFormState}
                 deleteButton={this.removeTeam}
                 saveButton={this.createTeam}
                 modalForm={TeamModalForm}

                 sports={this.props.sports}
                 venues={this.props.venues}
                 selectFile={this.selectFile}/>
          <br />
          <List list={this.props.teams}
                setItem={this.setTeam} />
        </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    teams: state.teams,
    sports: state.sports,
    venues: state.venues,
    team: state.team
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamsActions: bindActionCreators(teamsActions, dispatch),
    teamActions: bindActionCreators(teamActions, dispatch),
    sportActions: bindActionCreators(sportActions, dispatch),
    venueActions: bindActionCreators(venueActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Teams);
