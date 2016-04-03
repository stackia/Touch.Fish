/**
 * Created by Stackia <jsq2627@gmail.com> @ 4/3/2016 10:22 AM
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

let store = createStore(reducers, window.__INITIAL_STATE__);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
