import { combineReducers } from 'redux';
import teams from './teams';
import sports from './sports';
import loading from './loading';

const rootReducer = combineReducers({
  teams,
  sports,
  loading
});

export default rootReducer;