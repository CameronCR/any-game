import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

export function getTeam(team) {
  return function(dispatch) {
    firebase.db.ref('teams').orderByChild('name').startAt(team).endAt(team).on('value', function (snapshot) {
      dispatch(loadTeamSuccess(Object.values(snapshot.val())[0]));
    });
  };
}

export function saveTeam(team) {
  return function(dispatch) {
    firebase.db.ref('teams/').push({
      name: team.name,
      location: team.location,
      city: team.city,
      sport: team.sport
    }, function(error) {
      if (error)
        dispatch(createTeamSuccess(false));
      else
        dispatch(createTeamSuccess(true));
    });
  };
}

export function updateTeam() {
  return function (dispatch) {

  }
}


export function loadTeamSuccess(team) {
  return {
    type: actionTypes.LOAD_TEAM_SUCCESS,
    team
  };
}

export function createTeamSuccess(status) {
  return {
    type: actionTypes.CREATE_TEAM_SUCCESS,
    status
  }
}

export function updateTeamSuccess(status) {
  return {
    type: actionTypes.UPDATE_SPORT_SUCCESS,
    status
  }
}
