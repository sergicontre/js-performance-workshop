'use strict';

const obj = {
  a: 'a',
  b: 'b',
  c: 'c'
};

exports.compare = {
  'Assign': function () {
    const copy = Object.assign({}, obj);
  },
  'OldCopy': function () {
    const copy = JSON.parse(JSON.stringify(obj));
  }
};

require('bench').runMain();
