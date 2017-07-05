import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

export function loadUsers(){
  return function(dispatch) {
    firebase.db.ref('users').on('value', function (snapshot) {
        dispatch(loadUsersSuccess(Object.values(snapshot.val())));
    });
  };
}

export function loadUsersSuccess(users){
  console.log(users);
  return {
    type: actionTypes.ACTIVE_USERS,
    users
  };
}
