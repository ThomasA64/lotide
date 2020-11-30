const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

// Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers.

// this function should return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character.

const countLetters = function (sentence) {
  sentence = sentence.split(" ").join("");
  console.log(sentence);
  // sentence = sentence.replace(/\s/g, '');
  // I need to make a variable that starts the counting of the letters from 0.
  const LetterCount = {};
  // need to output it as an array of objects {letter, number of times the letter happens}

  //Now I have to loop through the sentence.
  for (const character of sentence) {
    if (LetterCount[character]) {
      LetterCount[character]++;
    } else {
      LetterCount[character] = 1;
    }
  }
  return LetterCount;
};

console.log(countLetters("L H L H"));
