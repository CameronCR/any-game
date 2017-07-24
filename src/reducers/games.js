import * as actionTypes from '../actions/actionTypes';

export default function games(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_GAMES_SUCCESS:
      return action.games;

    default:
      return state;
  }
}
