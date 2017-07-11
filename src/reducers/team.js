import * as actionTypes from '../actions/actionTypes';

export default function team(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_SEATING_CHART_SUCCESS:
      return action.team;

    default:
      return state;
  }
}
