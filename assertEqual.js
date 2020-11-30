const assertEqual = function(actual, expected) {
  if (actual === expected) {
  return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
<<<<<<< HEAD
  } else {
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
=======
>>>>>>> 26ea318be76daea29a45249c252960cb039c3b58
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
};

<<<<<<< HEAD
// EXPORT FUNCTION
module.exports = assertEqual;

=======
// TEST CODE
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(2, 2));
>>>>>>> 26ea318be76daea29a45249c252960cb039c3b58

