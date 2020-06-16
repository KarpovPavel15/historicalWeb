import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from 'store';

import { Page } from 'modules/page';

export default function App () {
    const customHistory = createBrowserHistory();
    return (
        <Provider store={store}>
            <Router history={customHistory}>
                <Page/>
            </Router>
        </Provider>
    )
};
