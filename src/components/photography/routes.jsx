import React from 'react';
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Home } from 'components/photography/home.jsx';
import { Gallery } from 'components/photography/gallery.jsx';
import store from 'stores/photography-store';

export const routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route name="home" path="/" component={Home}>
                <Route name="gallery(/:galleryType)" path="gallery" component={Gallery}></Route>
            </Route>
        </Router>
    </Provider>
);
