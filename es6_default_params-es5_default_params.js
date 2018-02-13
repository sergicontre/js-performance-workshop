'use strict';

function f1 (x, y = 7, z = 42) {
    return x + y + z
}

function f2 (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};

exports.compare = {
  'es6_default_params': function () {
    f1(1) === 50
  },
  'es5_default_params': function () {
    f2(1) === 50
  }
};

require('bench').runMain();
