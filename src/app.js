/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Gallery from './components/Gallery';
import photosReducer from './redux/photos';

const store = createStore(
    photosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/(:category)" component={Gallery} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
