import * as actionTypes from '../actions/actionTypes';

export default function games(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_GAMES_SUCCESS:
      return {gamesArray: action.games, isFetching: false, team: action.team};

    case actionTypes.ADD_GAMES_SUCCESS:
      let games = state.gamesArray.concat(action.games);
      return {gamesArray: games, isFetching: false, team: state.team};

    case actionTypes.REQUEST_GAMES:
      return { gamesArray: state.gamesArray, isFetching: action.status, team: state.team };

    default:
      return state;
  }
}
