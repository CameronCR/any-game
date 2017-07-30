import * as actionTypes from '../actions/actionTypes';

export default function games(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_GAMES_SUCCESS:
      return {gamesArray: action.games, isFetching: false, team: action.team};

    case actionTypes.ADD_GAMES_SUCCESS:
      return state.concat(action.games);

    case actionTypes.REQUEST_GAMES:
      return { isFetching: action.status };

    default:
      return state;
  }
}
