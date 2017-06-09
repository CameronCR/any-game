import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

export function loadTeams() {
  return function(dispatch) {
    firebase.db.ref('teams').on('value', function (snapshot) {
      dispatch(loadTeamsSuccess(Object.values(snapshot.val())));
    });
  };
}

export function saveTeam(team) {
  return function(dispatch) {
    firebase.db.ref('teams/').push({
      name: team.name
    }, function(error) {
      if (error)
        dispatch(createTeamSuccess(false));
      else {
        dispatch(createTeamSuccess(true));
      }
    });
  };
}

export function createTeamSuccess(status) {
  return {
    type: actionTypes.CREATE_TEAM_SUCCESS,
    status
  };
}


export function loadTeamsSuccess(teams) {
  return {
    type: actionTypes.LOAD_TEAMS_SUCCESS,
    teams
  };
}