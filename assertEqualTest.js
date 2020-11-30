
//* REQUIRE ASSERTEQUAL

const assertEqual = require('../assertEqual');

// ASSERT EQUAL TEST CODE
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(2, 2));

// HEAD TEST CODE

console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

