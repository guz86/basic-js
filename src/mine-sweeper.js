const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = [];

    for (let j = 0; j < matrix[i].length; j += 1) {
      let sum = 0;

      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          if (i + x >= 0 && i + x < matrix.length && j + y >= 0 && j + y < matrix[i].length) {
            sum += matrix[i + x][j + y];
          }
        }
      }

      sum -= matrix[i][j];
      row.push(sum);
    }

    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper
};
