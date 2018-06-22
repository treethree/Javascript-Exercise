// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//method 1: captalize first letter and use slice to get remaind part.

//method 2: captalize first letter for each char in string if the char before it
//is space character we uppercase current char else we add it in to our result.

// function capitalize(str) {
//   let array = str.split(" ");
//   let cap = [];
//   for(let i = 0; i < array.length; i++){
//     let a = array[i].slice(1);
//     let b = array[i].charAt(0).toUpperCase()
//     let res = b + a;
//     cap.push(res);
//   }
//   let captal = cap.join(' ');
//   return captal;
// }

function capitalize(str) {
  const words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');

}

module.exports = capitalize;
