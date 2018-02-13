'use strict';

function Player (name, points) {
  this.name = name;
  this.points = points;
}

exports.compare = {
  'hidden': function () {
    let elf = new Player('Elf', 100); 
    let mage = new Player('Foo', 200);
    mage.mana = 8; // extra here.
  },
  'no_extra_hidden': function () {
    let orc = new Player('Orc', 95); 
    let goblin = new Player('Goblin', 15); 
  }
};

require('bench').runMain();
