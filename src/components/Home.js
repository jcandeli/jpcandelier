/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import photosReducer from '../redux/photos';

import Mosaic from './Mosaic';
import Navigation from './Navigation';
import photoDB from '../photoDB';

const store = createStore(
    photosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class Home extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Navigation />
                    <Mosaic photos={photoDB} columns={6} />
                </div>
            </Provider>
        );
    }
}
