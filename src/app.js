import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import Home from './components/Home';

render(
    <Router history={browserHistory}>
        <Route path="/(:category)" component={Home} />
    </Router>,
    document.getElementById('app')
);
