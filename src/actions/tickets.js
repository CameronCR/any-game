import * as firebase from '../lib/firebase';
import * as actionTypes from './actionTypes';

import * as loadingActions from './loading';

const ref = firebase.db.ref('tickets');

//Actions
export function loadTickets(team){
  return function(dispatch) {
    console.log('here')
    dispatch(loadingActions.isLoading('tickets'));
    if(team) {
      ref.orderByChild('home_team').equalTo(team).on('value', function(snapshot) {
        dispatch(loadTicketsSuccess(Object.values(snapshot.val())));
        dispatch(loadingActions.notLoading('tickets'));
      });
    } else {
      ref.orderByChild('home_team').on('value', function(snapshot) {
        dispatch(loadTicketsSuccess(Object.values(snapshot.val())));
        dispatch(loadingActions.notLoading('tickets'));
      });
    }

  };
}

//To Reducers
export function loadTicketsSuccess(tickets){
  return {
    type: actionTypes.LOAD_TICKETS_SUCCESS,
    tickets
  };
}

export function requestTickets(){
  return {
    type: actionTypes.REQUEST_GAMES
  };
}
