import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

let ref = firebase.db.ref('config');

export function loadSettings() {
  return function(dispatch) {
    dispatch(requestSettings(true));
    ref.on('value', function (snapshot) {
      dispatch(loadSettingsSuccess(snapshot.val().keys));
    });
  };
}

export function requestSettings(status) {
  return {
    type: actionTypes.REQUEST_SETTINGS,
    status
  };
}

export function loadSettingsSuccess(settings) {
  return {
    type: actionTypes.SETTINGS,
    settings
  };
}
