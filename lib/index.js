
/**
 * Returns true if heads, false if tails.
 *
 * @return {boolean}
 */

exports.isHeads = function() {
  return Math.random() > 0.5;
};

/**
 * Returns 'heads' or 'tails'.
 *
 * @return {string}
 */

exports.toss = function() {
  return (Math.random() > 0.5) ? 'heads' : 'tails';
};
