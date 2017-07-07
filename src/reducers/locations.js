import * as actionTypes from '../actions/actionTypes';

export default function locations(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_LOCATIONS_SUCCESS:
      return action.locations;

    default:
      return state;
  }
}
