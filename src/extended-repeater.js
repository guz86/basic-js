const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {  
  let times = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';

  if (options.hasOwnProperty('repeatTimes')) times = options.repeatTimes;
  if (options.hasOwnProperty('separator')) separator = options.separator;
  if (options.hasOwnProperty('addition')) addition = `${options.addition}`;
  if (options.hasOwnProperty('additionRepeatTimes') && typeof options.additionRepeatTimes === 'number') {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.hasOwnProperty('additionSeparator')) additionSeparator = options.additionSeparator;

  let arrAddition = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    arrAddition.push(addition);
  }

  let arr = [];
  str = `${str}`;
  let element = str.toString().concat(arrAddition.join(additionSeparator));

  for (let i = 0; i < times; i++) {
    arr.push(element);
  }

  return arr.join(separator);
}

module.exports = {
  repeater
};
