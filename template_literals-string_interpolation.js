'use strict';


function es6StringInterpolation () {
    var customer = { name: "Foo" }
    var card = { amount: 7, product: "Bar", unitprice: 42 }
    var message = `Hello ${customer.name},
    want to buy ${card.amount} ${card.product} for
    a total of ${card.amount * card.unitprice} bucks?`
}

function es5StringInterpolation () {
    var customer = { name: "Foo" };
    var card = { amount: 7, product: "Bar", unitprice: 42 };
    var message = "Hello " + customer.name + ",\n" +
    "want to buy " + card.amount + " " + card.product + " for\n" +
    "a total of " + (card.amount * card.unitprice) + " bucks?";
}

exports.compare = {
  'es6StringInterpolation': function () {
    es6StringInterpolation();
  },
  'es5StringInterpolation': function () {
    es5StringInterpolation();
  }
};

require('bench').runMain();
