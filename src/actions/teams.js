import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

let ref = firebase.db.ref('teams');

//Utility Funtions
function sortTeamsBySportAndDispatch(snapshot, dispatch){
  let teams = [];
  snapshot.forEach(function(child) {
    teams.push(child.val());
  });
  dispatch(loadTeamsSuccess(teams));
}

//Actions
export function loadTeams() {
  return function(dispatch) {
    firebase.db.ref('teams').orderByChild('name').on('value', function (snapshot) {
      sortTeamsBySportAndDispatch(snapshot, dispatch);
    });
  };
}

export function loadTeamsBySport(sport) {
  return function(dispatch) {
    firebase.db.ref('teams').orderByChild('sport').equalTo(sport).on('value', function (snapshot) {
      //todo: sort by team name before distpatch
      sortTeamsBySportAndDispatch(snapshot, dispatch);
    });
  };
}

export function saveTeam(team) {
  let postKey;
  ref.orderByChild('name').equalTo(team.name).once('value', function (snapshot){
    let exists = (snapshot.val() !== null);
    if (exists) {
      postKey = Object.keys(snapshot.val())[0];
    } else {
      postKey = firebase.db.ref('teams/').push().key;
    }
  });
  return function(dispatch) {
    firebase.db.ref('teams/' + postKey).update(team, function(error) {
      if (error)
        dispatch(createTeamSuccess(false));
      else {
        dispatch(createTeamSuccess(true));
      }
    });
  };
}

export function removeTeam(team) {
  let query = ref.orderByChild('name').equalTo(team.name);
  query.on('child_added', function(snapshot) {
    snapshot.ref.remove();
  });
}

//To Reducers
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
