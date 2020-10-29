const assertEqual = function(actual, expected) {
  if (actual === expected) {
  return `✅✅✅ Assertion Passed: ${actual} === ${expected}`
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
};

var head =  function(array, n) {
  if (array == null) 
  return void 0;
if (n == null) 
  return array[0];
if (n < 0)
  return [];
return array.slice(0, n);
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

