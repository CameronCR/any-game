import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';

import * as settingsActions from './actions/settings';


const store = configureStore();
// To preload data: store.dispatch(action());
store.dispatch(settingsActions.loadSettings());


render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);
