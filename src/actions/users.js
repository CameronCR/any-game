import * as actionTypes from './actionTypes';
import * as firebase from '../lib/firebase';

export function loadUsers(){
  return function(dispatch) {
    firebase.db.ref('users').on('value', function (snapshot) {
        dispatch(loadUsersSuccess(Object.values(snapshot.val())));
    });
  };
}

export function createUser(email, password, user){
  return function(dispatch) {
    firebase.auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      dispatch(handleError(error.message));
    });
    firebase.db.ref('users/').push({
      settings: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: email
      }
    });
  };
}

export function handleError(error){
  return {
    type: actionTypes.USER_ERROR,
    error
  };
}

export function loadUsersSuccess(users){
  return {
    type: actionTypes.ACTIVE_USERS,
    users
  };
}
