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
const isValidChar = function (char) {
  if (char === " ") {
    return false;
  } else {
    return true;
  }
};
const letterPositions = function (sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (isValidChar(char)) {
      if (char in results) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
