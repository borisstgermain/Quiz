// @flow

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/app';

const store = configureStore();

const wrapApp = (Component, store) => (
    <Provider store={store}>
        <AppContainer>
            <Component />
        </AppContainer>
    </Provider>
);
const rootEl = document.getElementById('root');

render(wrapApp(App, store), rootEl);

if (module.hot) {
    // flow-disable-next-line
    module.hot.accept('./components/app', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('./components/app').default;
        render(wrapApp(NextApp, store), rootEl);
    });
}
