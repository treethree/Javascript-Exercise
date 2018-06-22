// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '   mid = 2, row=0,
//       ' ### '    mid=2,row=1,
//       '#####'

//method 1: iterate. find mid point and use mid+row && mid-row to assign '#'.
//method 2: recursive use length to represent column

 function pyramid(n, row = 0, res = '') {
   if(row === n){
     return;
   }
   const mid = Math.floor((2 * n - 1) / 2);
   if(res.length === 2 * n - 1){
      console.log(res);
      return pyramid(n, row + 1);
   }
   let add;
   if(res.length <= mid + row && res.length >= mid - row){
     add = '#';
   }else{
     add = ' ';
   }
   pyramid(n, row, res + add);

 }

// function pyramid(n) {
//   let mid = Math.floor((2 * n - 1) / 2);
//   for(let row=0; row<n; row++){
//     let res = '';
//     for(let col=0; col< (2 * n - 1); col++){
//         if(mid - row <= col && mid + row >= col){
//           res += '#';
//         }else{
//           res += ' ';
//         }
//     }
//     console.log(res);
//   }
// }

module.exports = pyramid;
