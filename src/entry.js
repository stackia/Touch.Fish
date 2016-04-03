/**
 * Created by Stackia <jsq2627@gmail.com> @ 4/3/2016 10:22 AM
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';

ReactDOM.render(<App initialStates={window.__APP_INITIAL_STATES}/>, document.getElementById('app'));
