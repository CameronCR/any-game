import * as actionTypes from '../actions/actionTypes';

export default function loading(state = { app: true}, action) {
  switch(action.type) {

    case actionTypes.LOADING_STATES: {
      return action.loadingState;
    }

    default:
      return state;
  }
}
