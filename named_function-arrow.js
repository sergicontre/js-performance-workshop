'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const foo = (x) => x;

function namedFoo (x) {
  return x;
}

exports.compare = {
  'named': function () {
    namedFoo(1);
    array.forEach(function (a) {
      return a;
    });
    array.filter(function (a) {
      return a % 2 === 0;
    });
  },
  'arrow': function () {
    foo(1);
    array.forEach(a => a);
    array.filter(a => a % 2 === 0);
  }
};

require('bench').runMain();
