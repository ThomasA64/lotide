const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  let arrayEqual = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      arrayEqual = false;
    }
  }
  return arrayEqual;
};

const assertEqualArrays = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo} in data types and length\n`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo} in data types or length\n`;
  }
};

module.exports = assertEqualArrays