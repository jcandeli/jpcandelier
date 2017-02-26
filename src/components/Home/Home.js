import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import photosReducer from '../../redux/photos';

import Mosaic from '../Mosaic';
import photoDB from '../../photoDB';

const store = createStore(
    photosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export class Home extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Mosaic photos={photoDB} />
                </div>
            </Provider>
        );
    }
}

export default Home;