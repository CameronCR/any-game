import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

import * as loading from './loading';

export function loadTeams() {
  return function(dispatch) {
    firebase.db.ref('teams').on('value', function (snapshot) {
      dispatch(loadTeamsSuccess(Object.values(snapshot.val())));
    });
  };
}

export function loadTeamsSuccess(teams) {
  return {
    type: actionTypes.LOAD_TEAMS_SUCCESS,
    teams
  };
}