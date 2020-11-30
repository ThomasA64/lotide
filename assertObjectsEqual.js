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

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(Object1, Object2)) {
    return `✅✅✅ Assertion Passed: ${Object1} === ${Object2} in data types and length\n`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${Object1} !== ${Object2} in data types or length\n`;
  }
};
