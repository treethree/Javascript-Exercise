// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//method 1: brutal force iterate through four sides.

function matrix(n) {
  let res = [];
  for (let i=0; i<n; i++)
  {
    res.push([]);
  }
  let startRow = 0;
  let endRow = n-1;
  let startCol = 0;
  let endCol = n-1;
  let counter = 1;
  while (startRow <= endRow && startCol <= endCol)
  {
    for(let i = startCol; i <= endCol; i++)
    {
      res[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for(let i = startRow; i <= endRow; i++)
    {
      res[i][endCol] = counter;
      counter++;
    }
    endCol--;
    for(let i = endCol; i>= startCol; i--)
    {
      res[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for(let i = endRow; i>= startRow; i--)
    {
      res[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return res;
}

module.exports = matrix;
