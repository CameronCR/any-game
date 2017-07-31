import * as firebase from '../lib/firebase';
import * as actionTypes from './actionTypes';

import * as loadingActions from './loading';

let ref = firebase.db.ref('config');

//Actions
export function loadSettings() {
  return function(dispatch) {
    dispatch(loadingActions.isLoading('refereeConsole'));
    ref.on('value', function (snapshot) {
      dispatch(loadSettingsSuccess(snapshot.val().keys));
      dispatch(loadingActions.notLoading('refereeConsole'));
    });
  };
}

//To Reducers
function loadSettingsSuccess(settings) {
  return {
    type: actionTypes.SETTINGS,
    settings
  };
}
