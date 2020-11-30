<<<<<<< HEAD
const eqArrays = function (arr1, arr2) {
=======
const eqArrays = function(arr1, arr2) {
>>>>>>> 26ea318be76daea29a45249c252960cb039c3b58
  if (arr1.length !== arr2.length) {
    return false;
  }
  let EqualArr = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      EqualArr = false;
    }
  }
  return EqualArr;
};

<<<<<<< HEAD
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  }
};

const without = function (source, itemsToRemove) {
  //We'll want to return a new array that will return a subset of an array, removing unwanted elements.
  const newArr = [];
  if (eqArrays(source, itemsToRemove)) {
    //Return newArr as an empty array if the arrays are equal.
=======
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  //We'll want to return a new array that will return a subset of an array, removing unwanted elements. 
  const newArr = [];
  if (eqArrays(source, itemsToRemove)) {
    //Return newArr as an empty array if the arrays are equal. 
>>>>>>> 26ea318be76daea29a45249c252960cb039c3b58
    return newArr;
  } else {
    for (let i = 0; i < source.length; i++) {
      let equalvalues = false;
<<<<<<< HEAD
      //Using a nested loop to loop through source first then another to loop through items to remove.
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          equalvalues = true;
=======
      //Using a nested loop to loop through source first then another to loop through items to remove. 
      for (let j = 0; j < itemsToRemove.length; j++) {
        if ((source[i] === itemsToRemove[j])) {
          equalvalues = true;  
>>>>>>> 26ea318be76daea29a45249c252960cb039c3b58
          break;
        }
      }
      if (equalvalues === false) {
        newArr.push(source[i]);
        //We want to remove the items with .push so that they are not in the new array.
      }
    }
    return newArr;
  }
};

const words = ["hello", "world", "lighthouse"];
<<<<<<< HEAD
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
=======
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
>>>>>>> 26ea318be76daea29a45249c252960cb039c3b58
