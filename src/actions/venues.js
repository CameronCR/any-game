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
  let postKey;
  ref.orderByChild('name').equalTo(venue.name).once('value', function (snapshot) {
    let exists = (snapshot.val() !== null);
    if (exists) {
      postKey = Object.keys(snapshot.val())[0];
    } else {
      postKey = ref.push().key;
    }
  });
  return function(dispatch) {
    firebase.db.ref('values/' + postKey).update(venue, function (error){
      if (error) {
        dispatch(createVenueSuccess(false));
      } else {
        dispatch(createVenueSuccess(true));
      }
    });
  };
}


export function removeVenue(venue) {
  ref.orderByChild('name').equalTo(venue.name).on('child_added', function(snapshot) {
    snapshot.ref.remove();
  });
}

export function createVenueSuccess(status) {
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
