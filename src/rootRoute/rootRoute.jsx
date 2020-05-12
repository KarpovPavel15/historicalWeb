import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { default as MainPage } from 'modules/mainPage';


export const RootRoute = () => (
    <Switch>
        <Route exact path='' component={MainPage}/>
    </Switch>
);
