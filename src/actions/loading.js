import * as actionTypes from './actionTypes';

//Actions
export function isLoading(level) {
  return function(dispatch) {
    let loadingState = {};
    loadingState[level] = true;
    dispatch(setLoading(loadingState));
  };
}

export function notLoading(level) {
  return function(dispatch) {
    let loadingState = {};
    loadingState[level] = false;
    dispatch(setLoading(loadingState));
  };
}

//To Reducers
function setLoading(loadingState) {
  return {
    type: actionTypes.LOADING_STATES,
    loadingState
  };
}
