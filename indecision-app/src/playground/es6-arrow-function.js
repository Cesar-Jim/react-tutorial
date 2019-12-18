// const square = function(x) {
//   return x * x;
// };

// const squareArrow = x => {
//   return x * x;
// };

// const squareArrow = x => x * x;

// console.log('square', squareArrow(9));

const getFirstName = fullName => {
  return fullName.split(' ')[0];
};

const getFirstNameArrow = fullName => fullName.split(' ')[0];

console.log('getFirstName: ', getFirstNameArrow('Cesar Jimenez'));
