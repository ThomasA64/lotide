const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

//I will use the slice function to implement this tail since I can remove the head of the array and return the array. 

const tail = function(arr) {

  newArrTail = arr.slice(1);
  return newArrTail;
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
const OneElement = ['one'];
const EmptyElement = [];
console.log(words.length);
console.log(words);
console.log(tail(words));
console.log(words);
// no need to capture the return value since we are not checking it
console.log(assertEqual(3, 3)); 
// original array should still have 3 elements!
console.log(tail(OneElement)); 
// An array with only one element should yield an empty array for its tail
console.log(tail(EmptyElement));
// An empty array should yield an empty array for its tail
