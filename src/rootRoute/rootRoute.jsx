import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { default as MainPage } from 'modules/mainPage';
import { default as RouteRoom } from 'modules/routeRoom';


export const RootRoute = () => (
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/routes/:id' exact component={RouteRoom}/>
        <Route path='/#/routes/:id' exact component={RouteRoom}/>
    </Switch>
);
