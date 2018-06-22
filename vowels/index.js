// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//method 1: iterative
//method 2: Regex with match()

function vowels(str) {
  let reg = /[aeiou]/gi;
  let res = str.match(reg);//if no match found will return null.
  return res ? res.length : 0;

}

// function vowels(str) {
//   let arr = str.toLowerCase().split('');
//   let res = 0;
//   for(let char of arr)
//   {
        // we can use an array to store 'aeiou' and use include() method to find.
//     if(char === 'a' || char === 'e' || char ==='i' || char ==='o' || char === 'u')
//       res += 1;
//   }
//   return res;
// }

module.exports = vowels;
