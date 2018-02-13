'use strict';

const player = [
  { score: 10 },
  { score: 20 },
  { score: 30 },
  { score: 40 },
  { score: 50 }
];

function reduceByHand () {
  let scores = 0; 
  for (let i = 0; i < player.length; i++) {
    scores += player[i].score;
  }
}

exports.compare = {
  'reducee': function () {
    let scores = player.reduce((sum, p) => sum + p.score, 0); 
  },
  'reduceByHand': function () {
    reduceByHand();
  }
};

require('bench').runMain();
