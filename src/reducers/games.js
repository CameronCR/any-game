import * as actionTypes from '../actions/actionTypes';

export default function games(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_GAMES_SUCCESS:
      return action.games;

    case actionTypes.REQUEST_GAMES:
      return { isFetching: action.status };

    default:
      return state;
  }
}
