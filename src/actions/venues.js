import config from '../lib/config';
import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

let ref = firebase.db.ref('venues');

export function loadVenues() {
  return function(dispatch) {
    ref.on('value', function (snapshot) {
      dispatch(loadLocationsSuccess(Object.values(snapshot.val())));
    });
  };
}

export function saveVenue(venue) {
  return function(dispatch) {
    ref.push(venue, function(error) {
      if (error)
        dispatch(createLocationSuccess(false));
      else {
        dispatch(createLocationSuccess(true));
      }
    });
  };
}


export function removeVenue(venue) {
  ref.orderByChild('name').equalTo(venue.name).on('child_added', function(snapshot) {
    snapshot.ref.remove();
  });
}

export function createLocationSuccess(status) {
  return {
    type: actionTypes.CREATE_VENUE_SUCCESS,
    status
  };
}

export function loadLocationsSuccess(venues) {
  return {
    type: actionTypes.LOAD_VENUES_SUCCESS,
    venues
  };
}
