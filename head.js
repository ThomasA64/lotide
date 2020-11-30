
//* REQUIRE ASSERT EQUAL INSTEAD OF WRITING IT OUT

const assertEqual = require('./assertEqual');

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//   }
// };

var head = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

module.exports = head;
