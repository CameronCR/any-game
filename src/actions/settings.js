import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

let ref = firebase.db.ref('config');

export function loadSettings() {
  return function(dispatch) {
    ref.on('value', function (snapshot) {
      dispatch(loadSettingsSuccess(snapshot.val().keys));
    });
  };
}

export function loadSettingsSuccess(settings) {
  return {
    type: actionTypes.SETTINGS,
    settings
  };
}
