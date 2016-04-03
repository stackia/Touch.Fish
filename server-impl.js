/**
 * Created by stackia on 4/4/16.
 */
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import stringify from 'json-stringify-safe';
import App from './src/components/app';
import {__express as jadeExpress} from 'jade';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers';

let server = express();

server.engine('jade', jadeExpress);
server.set('view engine', 'jade');

server.use(express.static(__dirname + '/dist', {index: false}));

server.get('*', function (req, res) {
  let store = createStore(reducers);
  let html = ReactDOMServer.renderToString(<Provider store={store}><App/></Provider>);
  res.render('index', {
    react: html,
    initialScripts: 'window.__INITIAL_STATE__ = ' + stringify(store.getState()) + ';'
  });
});

server.listen(process.env.port || 3000, function () {
  console.log('Listening on port 3000...');
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
