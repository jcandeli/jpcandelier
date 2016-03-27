import React from 'react';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';
import { Home } from './home.jsx';
import { Gallery } from './gallery.jsx';

export const routes = (
    <Router history={browserHistory}>
        <Route name="home" path="/" component={Home}>
            <IndexRoute component={Gallery}/>
        </Route>
    </Router>
);
