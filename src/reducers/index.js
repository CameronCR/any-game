import { combineReducers } from 'redux';
import teams from './teams';
import sports from './sports';
import loading from './loading';
import users from './users';
import venues from './venues';

const rootReducer = combineReducers({
  teams,
  sports,
  loading,
  users,
  venues
});

export default rootReducer;
