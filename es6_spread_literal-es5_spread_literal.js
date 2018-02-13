'use strict';

function fnEs5() {
    var ret = [1];
    ret.push(1, 2, 3);
    return ret;
  }

  function fnEs6() {
    return [1, ... [1, 2, 3]];
  }



exports.compare = {
  'es5_spread_literal': function () {
    fnEs5()[3];
  },
  'es6_spread_literal': function () {
    fnEs6()[3];
  }
};

require('bench').runMain();
