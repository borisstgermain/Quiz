// @flow

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App/';
import './index.css';

const store = configureStore();

const wrapApp = (Component, reduxStore) => (
  <Provider store={reduxStore}>
    <AppContainer>
      <Component />
    </AppContainer>
  </Provider>
);
const rootEl = document.querySelector('.root');
rootEl.style.height = '100%';

render(wrapApp(App, store), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default;
    render(wrapApp(NextApp, store), rootEl);
  });
}
