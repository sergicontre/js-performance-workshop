'use strict';

const games = [
  { name: 'Doom', year: 1993 },
  { name: 'Golden Axe', year: 1989 },
  { name: 'Gauntlet', year: 1985 },
  { name: 'Frostbite', year: 1983 },
  { name: 'Tiger Heli', year: 1985 }
];

function filterByHand () {
  let oldGames = [];
  for (let i = 0; i < games.length; i++) {
    if (games[i].year <= 1984) {
      oldGames.push(games[i]);
    }
  }
}

exports.compare = {
  'filter': function () {
    let weAreOld = games.filter(g => g.year <= 1984); 
  },
  'filterByHand': function () {
    filterByHand();
  }
};

require('bench').runMain();
