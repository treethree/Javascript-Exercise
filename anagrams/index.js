// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// method 1: clean the string first and create obejct for string to record each char and times.
//then compare two object with length and values.

//method 2; clean string with regex and use sort() to get sorted string and compare two string.

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false;
//   }
//   for(let char in aCharMap){
//     if(aCharMap[char] !== bCharMap[char])
//         return false;
//   }
//   return true;
// }
//
// function buildCharMap(str){
//   const charMap = {};
//   let s = str.replace(/[^\w]/g).toLowerCase();
//   for(let char of s){
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

module.exports = anagrams;
