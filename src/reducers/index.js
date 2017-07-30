import { combineReducers } from 'redux';
import settings from './settings';
import teams from './teams';
import sports from './sports';
import users from './users';
import venues from './venues';
import games from './games';
import tickets from './tickets';

const rootReducer = combineReducers({
  settings,
  teams,
  sports,
  users,
  venues,
  games,
  tickets
});

export default rootReducer;
