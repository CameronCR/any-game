import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

export function loadTeams() {
  return function(dispatch) {
    firebase.db.ref('teams').orderByChild('sport').on('value', function (snapshot) {
      sortTeamsBySportAndDispatch(snapshot, dispatch);
    });
  };
}

export function loadTeamsBySport(sport) {
  return function(dispatch) {
    firebase.db.ref('teams').orderByChild('sport').equalTo(sport).on('value', function (snapshot) {
      sortTeamsBySportAndDispatch(snapshot, dispatch);
    });
  };
}

function sortTeamsBySportAndDispatch(snapshot, dispatch){
  let teams = [];
  snapshot.forEach(function(child) {
    teams.push(child.val());
  });
  dispatch(loadTeamsSuccess(teams));
}

export function saveTeam(team) {
  return function(dispatch) {
    firebase.db.ref('teams/').push(team, function(error) {
      if (error)
        dispatch(createTeamSuccess(false));
      else {
        dispatch(createTeamSuccess(true));
      }
    });
  };
}

export function removeTeam(team) {
  return function(dispatch) {
    let ref = firebase.db.ref('teams');
    let query = ref.orderByChild('name').equalTo(team.name);
    query.on('child_added', function(snapshot) {
      snapshot.ref.remove();
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
