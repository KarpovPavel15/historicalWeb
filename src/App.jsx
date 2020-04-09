import './style.scss'

import React from 'react';
import { Page } from 'modules/page';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const App = () => {
    const customHistory = createBrowserHistory();
    return (
        <Router history={customHistory}>
            <Page/>
        </Router>
    )
};
