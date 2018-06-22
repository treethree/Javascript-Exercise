// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// method 1: use array method reverse();
// method 2: mathmatic.

// function reverseInt(n) {
//   let t = 0;
//   let sign = 1;
//   if(Math.sign(n) < 0)
//   {
//     sign = -1
//     n = -n;
//   }
//   let res = n.toString().split('');
//   for( let i = 0; i< res.length; i++)
//   {
//      t = parseInt(res[i]) * Math.pow(10,i) + t;
//   }
//   return t * sign;
// }

function reverseInt(n) {
  const res = n.toString().split('').reverse().join('');

  return parseInt(res) * Math.sign(n);
}

module.exports = reverseInt;
