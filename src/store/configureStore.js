import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import LogRocket from 'logrocket';

export default function configureStore(initialState){
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, logger, reduxImmutableStateInvariant(), LogRocket.reduxMiddleware())
  );
}
