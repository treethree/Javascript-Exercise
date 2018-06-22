// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//method 1: iterate with two for loop and assign '#' if rows >= cols.
//method 2: recursive

function steps(n , row = 0, res = '') {
  if(n === row){
    return;
  }

  if(res.length === n){
    console.log(res);
    return steps(n, row + 1);
  }

  if(res.length <= row){
    res += '#';
  }else{
    res += ' ';
  }
  steps(n, row, res);
}

// function steps(n) {
//   for(let i = 0; i < n; i++){
//     let res = '';
//     for(let j=0; j < n; j++){
//       if( i >= j){
//         res += '#';
//       }
//       else{
//         res += ' ';
//       }
//     }
//     console.log(res);
//   }
// }

module.exports = steps;
