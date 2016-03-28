import React from 'react';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';
import { Home } from 'components/photography/home.jsx';
import { Gallery } from 'components/photography/gallery.jsx';

export const routes = (
    <Router history={browserHistory}>
        <Route name="home" path="/" component={Home}>
            <Route name="gallery(/:galleryType)" path="gallery" component={Gallery}></Route>
        </Route>
    </Router>
);
