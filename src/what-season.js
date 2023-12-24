const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error("Invalid date!");
  if (date.hasOwnProperty('toString')) throw new Error("Invalid date!");

  result = '';
  const month = date.toLocaleString('default', { month: 'long' });
  if (['January', 'February', 'December'].includes(month)) result = 'winter';
  if (['May', 'April', 'March'].includes(month)) result = 'spring';
  if (['June', 'July', 'August'].includes(month)) result = 'summer';
  if (['September', 'October', 'November'].includes(month)) result = 'autumn';

  return result;
}

module.exports = {
  getSeason
};
