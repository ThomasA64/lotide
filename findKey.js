const galaxies = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
},

const findKey = galaxies.find((stars) => {
  return galaxies.stars()
}
  
); // => "noma"

module.exports = findKey
