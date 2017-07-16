import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';

//import '../public/css/bootstrap.min.css';

//import './components/styles/dashboard.css';


const store = configureStore();
// To preload data: store.dispatch(action());


render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);
