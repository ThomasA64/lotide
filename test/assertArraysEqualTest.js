
//* Require AssertArraysEqual.js

const assertEqualArrays = require('../assertArraysEqual');

// TEST CODE for assertArraysEqual.js 

console.log(assertEqualArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(assertEqualArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(assertEqualArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertEqualArrays(["1", "2", "3"], ["1", "2", 3]));
