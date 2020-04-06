import React from 'react';
import { Route, Switch } from 'react-router-dom';


export const RootRoute = () => (
    <Switch>
        <Route path="route1" component="component1"/>
        <Route path="route2" component="component2"/>
        <Route path="route3" component="component3"/>
        <Route path="route4" component="component4"/>
    </Switch>
);
