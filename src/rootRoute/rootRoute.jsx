import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { default as MainPage } from 'modules/mainPage';
import { RouteRoom } from 'modules/routeRoom';


export const RootRoute = () => (
    <Switch>
        <Route path='' component={MainPage}/>
        <Route path='/routes/:id' component={RouteRoom}/>
    </Switch>
);
