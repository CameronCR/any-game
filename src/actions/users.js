import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

export function loadUsers(){
  return function(dispatch) {
    firebase.db.ref('users').on('value', function (snapshot) {
        dispatch(loadUsersSuccess(Object.values(snapshot.val())));
    });
  };
}

export function createUser(email, password){
  return function(dispatch) {
    firebase.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      console.log(error.message)
    });
  };
}

export function loadUsersSuccess(users){
  return {
    type: actionTypes.ACTIVE_USERS,
    users
  };
}
