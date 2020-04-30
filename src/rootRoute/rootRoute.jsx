import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { default as MainPage } from 'modules/mainPage';


export const RootRoute = () => (
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path="/route1" render={() => <div>Route</div>}/>
        <Route path="/route2" render={() => <div>Persones</div>}/>
        <Route path="/route3" render={() => <div>Team</div>}/>
        <Route path="/route4" render={() => <div>Souvenirs</div>}/>
    </Switch>
);
