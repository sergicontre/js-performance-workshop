'use strict';

const sarray = [1, 2, 3];
const marray = Array.from({length: 30000}, () => Math.floor(Math.random() * 9));
const larray = Array.from({length: 64001}, () => Math.floor(Math.random() * 9));

function each () {
  sarray.forEach(e => {
    e + 1;
  });
  marray.forEach(e => {
    e + 1;
  });
  larray.forEach(e => {
    e + 1;
  });
}

function forr () {
  for (let i = 0; i < sarray.length; i++) {
    sarray[i] + 1;
  }
  for (let i = 0; i < marray.length; i++) {
    marray[i] + 1;
  }
  for (let i = 0; i < larray.length; i++) {
    larray[i] + 1;
  }
}

exports.compare = {
  'forrEach': function () {
    each();
  },
  'forr': function () {
    forr();
  }
};

require('bench').runMain();
