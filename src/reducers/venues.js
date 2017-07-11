import * as actionTypes from '../actions/actionTypes';

export default function venues(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_VENUES_SUCCESS:
      return action.venues;

    default:
      return state;
  }
}
