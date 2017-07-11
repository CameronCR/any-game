import { combineReducers } from 'redux';
import teams from './teams';
import team from './team';
import sports from './sports';
import loading from './loading';
import users from './users';
import venues from './venues';

const rootReducer = combineReducers({
  teams,
  team,
  sports,
  loading,
  users,
  venues
});

export default rootReducer;
