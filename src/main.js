import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './redux/store';
require('./styles/main.scss');

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
