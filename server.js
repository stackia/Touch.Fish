/**
 * Created by Stackia <jsq2627@gmail.com> @ 4/3/2016 9:53 AM
 */
var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./dist/app.components').App;
var stringify = require('json-stringify-safe');

var app = express();

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/dist', {index: false}));

app.get('*', function (req, res) {
  var initialStates = {
    rotateFishNum: randomInt(6, 20),
    roundTime: randomInt(4000, 12000)
  };
  res.render('index', {
    react: ReactDOMServer.renderToString(React.createElement(App, {initialStates: initialStates})),
    initialScripts: 'window.__APP_INITIAL_STATES = ' + stringify(initialStates) + ';'
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
