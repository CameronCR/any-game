import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from '../../../actions/games';
import * as teamActions from '../../../actions/teams';
import * as settingsActions from '../../../actions/settings';


class Games extends Component {
  constructor(props) {
    super(props);
    //this.props.settingsActions.loadSettings();
  }

  componentWillMount() {
    this.props.teamActions.loadTeams();
  }
  componentDidMount() {
    this.props.gameActions.loadGamesFromServer('new-york-mets', this.props.settings.settings.seatGeek.clientId, this.props.settings.settings.seatGeek.secret);
  }

  render() {
    return (
      <div>
        <h1>Games Admin</h1>
        <div className="col-md-3">
          <select name="sport"
                  className="form-control"
                  onChange={this.filterBySport} >
            <option value="all">Pick Team</option>
            {this.props.teams.map((option) => {
              return <option key={option.name} value={option.name}>{option.name}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    games: state.games,
    settings: state.settings,
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch),
    teamActions: bindActionCreators(teamActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Games);
