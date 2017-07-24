import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from '../../../actions/games';
import * as teamActions from '../../../actions/teams';
import * as settingsActions from '../../../actions/settings';

import GamesList from './GamesList';

class Games extends Component {
  constructor(props) {
    super(props);
    this.props.teamActions.loadTeams();
    this.getGames = this.getGames.bind(this);
  }

  getGames(event){
    this.props.gameActions.loadGamesForTeam(event.target.value, this.props.settings.settings.seatGeek.clientId, this.props.settings.settings.seatGeek.secret);
  }

  gamesList(){
    if(this.props.games.length > 0) {
      return <GamesList list={this.props.games} preview="datetime_local" />;
    } else {
      return (
        <div className="col-md-4">
          <div className="alert alert-info" role="alert">Please select a team.</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Games Admin</h1>
        <div className="col-md-3">
          <select name="sport"
                  className="form-control"
                  onChange={this.getGames} >
            <option value="all">Pick Team</option>
            {this.props.teams.map((option) => {
              return <option key={option.name} value={option.slug}>{option.name}</option>;
            })}
          </select>
          <br />
        </div>
        {this.gamesList()}
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
