import * as actionTypes from '../actions/actionTypes';

export default function sports(state = [], action) {
  switch(action.type) {

    case actionTypes.LOAD_SPORTS_SUCCESS:
      return action.sports;

    default:
      return state;
  }
}
