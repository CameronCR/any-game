import { combineReducers } from 'redux';
import teams from './teams';
import sports from './sports';
import loading from './loading';
import users from './users';

const rootReducer = combineReducers({
  teams,
  sports,
  loading,
  users
});

export default rootReducer;
