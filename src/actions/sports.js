import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

export function loadSports() {
  return function(dispatch) {
    firebase.db.ref('sports').on('value', function (snapshot) {
      dispatch(loadSportsSuccess(Object.values(snapshot.val())));
    });
  };
}

export function saveSport(sport) {
  return function(dispatch) {
    firebase.db.ref('sports/').push({
      name: sport.name,
      openingDate: sport.openingDate
    }, function(error) {
      if (error)
        dispatch(createSportSuccess(false));
      else {
        dispatch(createSportSuccess(true));
      }
    });
  };
}

export function createSportSuccess(status) {
  return {
    type: actionTypes.CREATE_SPORT_SUCCESS,
    status
  };
}

export function loadSportsSuccess(sports) {
  return {
    type: actionTypes.LOAD_SPORTS_SUCCESS,
    sports
  }
}