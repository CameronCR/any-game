import * as actionTypes from '../actions/actionTypes';

export default function loadingReducer(state = false, action) {
  switch(action.type) {

    case actionTypes.CURRENTLY_LOADING:
      return action.currentlyLoading;

    default:
      return state;
  }
}