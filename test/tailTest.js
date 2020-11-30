//* REQUIRE ASSERTEQUAL.JS and TAIL.JS: 

const assert = require('chai').assert;
const tail = require('../tail');


//* TAIL TEST CODE: 

const words = ["Yo Yo", "Lighthouse", "Labs"];
const OneElement = ['one'];
const EmptyElement = [];
console.log(words.length);
console.log(words);
console.log(tail(words));
console.log(words);
// no need to capture the return value since we are not checking it
console.log(assert(3, 3)); 
// original array should still have 3 elements!
console.log(tail(OneElement)); 
// An array with only one element should yield an empty array for its tail
console.log(tail(EmptyElement));
// An empty array should yield an empty array for its tail
