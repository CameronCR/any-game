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
    this.getGames = this.getGames.bind(this);
    this.setGame = this.setGame.bind(this);
  }

  getGames(event){
    if(event.target.value != 'no-slug'){
      this.setState({
        error: false
      });
      this.props.gameActions.loadGames(this.props.settings.settings.seatGeek, event.target.value);
    } else {
      this.setState({
        error: true,
        errorMessage: "No Team Slug"
      });
    }
  }

  setGame(game){
    console.log(game);
  }

  gamesList(){
    const clickGame = () => this.setGame;
    console.log(this.props.games)
    if(this.props.games.isFetching) {
      return <RefereeLoading />;
    } else if(this.props.games.length > 0) {
      return (<GamesList list={this.props.games}
                         setItem={this.setGame} />
      );
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
          {this.state.error ? <div className="alert alert-warning" role="alert">{this.state.errorMessage}</div> : <div></div>}
          <select name="sport"
                  className="form-control"
                  onChange={this.getGames} >
            <option value="all">Pick Team</option>
            {this.props.teams.map((option) => {
              if(option.slug) {
                return <option key={option.name} value={option.slug}>{option.name}</option>;
              } else {
                return <option key={option.name} value="no-slug">{option.name}</option>;
              }

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
