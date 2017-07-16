import * as actionTypes from '../actions/actionTypes';

export default function venues(state = [], action) {
  switch(action.type) {

    case actionTypes.SETTINGS:
      return action.settings;

    default:
      return state;
  }
}
