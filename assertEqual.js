// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
};

// TEST CODE
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(2, 2));



