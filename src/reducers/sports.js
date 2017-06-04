import * as actionTypes from '../actions/actionTypes';

export default function sports(state = [], action) {
  switch(action.type) {
    // case actionTypes.CREATE_SPORT_SUCCESS:
    //   if (action.status) {
    //     return state
    //   }
    //   break;

    case actionTypes.LOAD_SPORTS_SUCCESS:
      return action.sports;

    default:
      return state;
  }
}