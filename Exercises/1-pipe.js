'use strict';

const pipe = (...fns) => {
  for (const funcs of fns) {
    if (typeof funcs !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }
  return (x) => fns.reduce((c, f) => f(c), x);
};

module.exports = { pipe };
