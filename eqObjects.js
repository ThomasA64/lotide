const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let Obj1Key1 = Object.keys(object1);
  let Obj2Key2 = Object.keys(object2);

  if (Obj1Key1.length !== Obj2Key2.length) {
    return false;
  }
  for (const Objkey of Obj1Key1) {
    if (object1[Objkey] !== object2[Objkey]) {
      return false;
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
