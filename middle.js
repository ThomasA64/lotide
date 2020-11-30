const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  }
};
// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

const middle = function (arr) {
  //Step 1: get it to return an empty array if there is no middle, so less than or equal to 2 should return an empty array.
  let emptyArr = [];
  if (arr.length <= 2) {
    return emptyArr;
  } else if (arr.length % 2 !== 0) {
    //Step 2: An odd numbered array should return 1 middle element.
    emptyArr.push(arr[Math.floor(arr.length / 2)]);
    // in order to get the middle value I have to divide the array length by 2. Math.floor will round down.
  } else {
    emptyArr.push(arr[Math.floor(arr.length / 2) - 1]);
    emptyArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return emptyArr;
};

console.log(middle([1, 2, 6, 8, 4, 5, 6, 7, 8]));
console.log(middle([1, 2, 6, 8]));
