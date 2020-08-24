/**
 *
 * @param {string} str is a string to pass to get the string with capitalized first letter version of it
 */
const capitalize = str => str[0].toUpperCase() + str.slice(1);

module.exports = capitalize;
