import config from '../lib/config';
import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

let ref = firebase.db.ref('sports');

export function loadLocations() {
  return function(dispatch) {
    ref.on('value', function (snapshot) {
      dispatch(loadLocationsSuccess(Object.values(snapshot.val())));
    });
  };
}


export function removeLocation(location) {
  ref.orderByChild('name').equalTo(location.name).on('child_added', function(snapshot) {
    snapshot.ref.remove();
  });
}

export function createLocationSuccess(status) {
  return {
    type: actionTypes.CREATE_LOCATION_SUCCESS,
    status
  };
}

export function loadLocationsSuccess(locations) {
  return {
    type: actionTypes.LOAD_LOCATIONS_SUCCESS,
    locations
  };
}
