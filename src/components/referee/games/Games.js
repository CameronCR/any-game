import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as gameActions from '../../../actions/games';
import * as teamActions from '../../../actions/teams';

import RefereeLoading from '../RefereeLoading';
import GamesList from './GamesList';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: ''
    };
    this.props.teamActions.loadTeams();
    this.filterGames = this.filterGames.bind(this);
    this.moreGames = this.moreGames.bind(this);
    this.createGame = this.createGame.bind(this);
    this.reloadGames = this.reloadGames.bind(this);
    this.props.gameActions.loadGames(false);
  }

  filterGames(event){
    if(event.target.value != 'no-slug'){
      this.setState({
        error: false
      });
    } else {
      this.setState({
        error: true,
        errorMessage: "No Team Slug"
      });
    }
  }

  reloadGames(event) {
    this.props.gameActions.loadGames(event.target.checked);
  }

  moreGames(event){
    event.preventDefault();
    this.props.gameActions.loadGamesForTeamAfterDate(this.props.settings.settings.seatGeek, this.props.games);
  }

  gamesList(){
    if(this.props.games.isFetching) {
      return <RefereeLoading heightOffset="20" />;
    } else if(this.props.games.length != 0 && this.props.games.gamesArray.length > 0) {
      return (<GamesList list={this.props.games.gamesArray}
                         setItem={this.createGame}
                         moreGames={this.moreGames}
                         isLocal />
      );
    } else if(this.props.games.team != undefined && this.props.games.gamesArray.length == 0) {
      return (
        <div className="col-md-4">
          <div className="alert alert-warning" role="alert">No games found.</div>
        </div>
      );
    } else {
      return (
        <div className="col-md-4">
          <div className="alert alert-info" role="alert">Please select a team.</div>
        </div>
      );
    }
  }

  createGame(game){
    this.props.gameActions.saveGame(game);
  }

  render() {
    return (
      <div>
        <h1>Games Admin</h1>
        <div className="col-md-3">
          {this.state.error ? <div className="alert alert-warning" role="alert">{this.state.errorMessage}</div> : <div></div>}
        </div>
        <div className="col-md-3">
          <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" onChange={this.reloadGames} />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">View only future games</span>
          </label>
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
