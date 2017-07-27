import { combineReducers } from 'redux';
import settings from './settings';
import teams from './teams';
import team from './team';
import sports from './sports';
import users from './users';
import venues from './venues';
import games from './games';

const rootReducer = combineReducers({
  settings,
  teams,
  team,
  sports,
  users,
  venues,
  games
});

export default rootReducer;
