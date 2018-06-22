// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let res = '';
//   /*for(let i = str.length-1; i >= 0 ; i--)
//   {
//     res += str.charAt(i);
//   }*/
//   for(let character of str)
//   {
//       res =  character + res;
//     }
//   return res;
// }

//method 1: use reverse();
//method 2: use array reduce();
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

/*function reverse(str) {
  return str.split('').reverse().join('');

}*/

function reverse(str) {
  debugger;
  return str.split('').reduce( (rev , char)=> {
    return char + rev;
  }, '');
}

reverse('addeddwed');
module.exports = reverse;
