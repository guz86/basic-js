const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let result = [];

  const process = (char, num) => {
    result.push(num !== 1 ? num : '', char);
  };

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      process(str[i], count);
      count = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine
};
