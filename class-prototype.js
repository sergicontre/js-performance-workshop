'use strict';

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

var Rectangle = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
Rectangle.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

exports.compare = {
  'class': function () {
    new Shape('test',1,2);
  },
  'prototype': function () {
    new Rectangle('test',1,2);
  }
};

require('bench').runMain();
