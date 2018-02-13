'use strict';

var a, b, c, d, e;  
a = [1,2,3];  
b = "dog";  
c = [42, "cat"];  

function concatMethod () {
// Using the concat method.  
d = a.concat(b, c); 
}

function spreadOperator () {
// Using the spread operator.  
e = [...a, b, ...c]; 
}

exports.compare = {
  'concatMethod': function () {
    concatMethod();
  },
  'spreadOperator': function () {
    spreadOperator();
  }
};

require('bench').runMain();
