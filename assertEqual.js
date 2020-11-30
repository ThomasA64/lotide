// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
  } else {
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  }
};

// EXPORT FUNCTION
module.exports = assertEqual;


