import * as actionTypes from '../actions/actionTypes';

export default function teamsReducer(state = [], action) {
  switch(action.type) {
    case actionTypes.CREATE_TEAM_SUCCESS:
      if (action.status) {
        return state
      }
      break;

    case actionTypes.LOAD_TEAM_SUCCESS:
      return action.team;

    default:
      return state
  }

}
