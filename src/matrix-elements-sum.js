const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix) return 0;
  if (!matrix[0])return 0;

  let result = 0;
  const rowLength = matrix[0].length;

  matrix.forEach((row, rowIndex) => {
    row.forEach((num, colIndex) => {
      if (rowIndex === 0 || matrix[rowIndex - 1][colIndex] !== 0) {
        result += num;
      }
    });
  });

  return result;
}

module.exports = {
  getMatrixElementsSum
};
