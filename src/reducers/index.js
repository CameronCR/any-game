import { combineReducers } from 'redux';
import teams from './teams';
import sports from './sports';
import team from './team';
import loading from './loading';

const rootReducer = combineReducers({
  teams,
  sports,
  team,
  loading
});

export default rootReducer;