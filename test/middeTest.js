
//* REQUIRE ASSERTARRAYSEQUAL.JS AND MIDDLE.JS


const assert = require('chai').assert;

const middle = require('../middle')

// MIDDLE.JS TEST CODE: 

console.log(assert(middle([1, 2, 6, 8, 4, 5, 6, 7, 8])));
console.log(assert(middle([1, 2, 6, 8])));
