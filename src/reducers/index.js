import { combineReducers } from 'redux';
import teams from './teams';
import sports from './sports';
import loading from './loading';
import users from './users';
import locations from './locations';

const rootReducer = combineReducers({
  teams,
  sports,
  loading,
  users,
  locations
});

export default rootReducer;
