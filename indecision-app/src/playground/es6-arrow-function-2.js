// arguments object - no longer bound with arrow functions

// const add = function(a, b) {
//   console.log(arguments); // WORKS!
//   return a + b;
// };

const add = (a, b) => {
  // console.log(arguments); // Throws an error because arguments does not exist in arrow functions
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: 'Cesar',
  cities: ['Montreal', 'Puebla', 'Genoa'],

  printPlacesLive() {
    return this.cities.map(city => this.name + ' has lived in ' + city + '!');
  }
};

console.log(user.printPlacesLive());

// Challenge area

const multiplier = {
  numbers: [5, 20, 75],
  multiplyBy: 3,

  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
