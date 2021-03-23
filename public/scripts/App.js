'use strict';

console.log(' App.js is running');

// Jsx - Javascript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' Darix'
  ),
  React.createElement(
    'p',
    null,
    ' This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      ' Item one'
    ),
    React.createElement(
      'li',
      null,
      ' Item two'
    )
  )
);

var userName = "Darix SAMANI";
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    ' Age : 20 ans'
  ),
  React.createElement(
    'p',
    null,
    'Location : Younde - CAMEROUN'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
