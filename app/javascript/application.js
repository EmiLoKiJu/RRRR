// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

/* eslint-disable react/no-deprecated */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
/* eslint-enable react/no-deprecated */
