const eqArrays = function(arr1, arr2) {
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  //Step 1: get it to return an empty array if there is no middle, so less than or equal to 2 should return an empty array. 
  if (arr.length <= 2) {
    return [];
  } else if (arr.length %2 !== 0) {//Step 2: An odd numbered array should return 1 middle element. 
    return arr[Math.floor(arr.length / 2)] 
  // in order to get the middle value I have to divide the array length by 2. Math.floor will round down. 
  } else if (arr.length %2 === 0) {
    return arr[Math.floor(arr.length / 2)]
  //if even give the two middle values?
  }
}

console.log(middle([1, 2, 3, 4, 5]));
