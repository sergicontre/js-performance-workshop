'use strict';

function testA () {
  return 'testA'
}

function testB () {
  return 'testB'
}

exports.compare = {
  'testA': function () {
    testA();
  },
  'testB': function () {
    testB();
  }
};

require('bench').runMain();
