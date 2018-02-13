'use strict';

var foo = ["uno", "dos", "tres"];

function noDestructuring () {
    var uno  = foo[0];
    var dos  = foo[1];
    var tres = foo[2]; 
}

function es6Destructuring () {
    var [uno, dos, tres] = foo;
}

exports.compare = {
  'noDestructuring': function () {
    noDestructuring();
  },
  'es6Destructuring': function () {
    es6Destructuring();
  }
};

require('bench').runMain();
