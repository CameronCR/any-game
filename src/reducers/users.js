import * as actionTypes from '../actions/actionTypes';

export default function users(state = [], action) {
  switch(action.type) {
    case actionTypes.ACTIVE_USERS:
      return action.users;
    case actionTypes.USER_ERROR:
      return action.error;
    default:
      return state;
  }
}
