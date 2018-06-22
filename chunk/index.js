// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//method 1 : use array method slice() to slice array in to correct size.
//methid 2 : create new array and start from last element and add from last to begin.


// function chunk(array, size) {
//   let res = [];
//   for(let i of array){
//     let last = res[res.length - 1];
//     if(!last || last.length === size)
//       res.push([i]);
//     else {
//       last.push(i);
//     }
//   }
//   return res;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
module.exports = chunk;
