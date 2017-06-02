import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/styles/dashboard.css';

import {loadSports} from './actions/sports';
import {loadTeams} from './actions/teams';

const store = configureStore();
store.dispatch(loadSports());
store.dispatch(loadTeams());

render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);