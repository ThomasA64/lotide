
//I will use the slice function to implement this tail since I can remove the head of the array and return the array. 

const tail = function(arr) {

  newArrTail = arr.slice(1);
  return newArrTail;
};

module.exports = tail; 

