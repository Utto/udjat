import * as R from 'ramda';

const N = R.always(null);
const isNaN = (x: number): boolean => Number.isNaN(x);
const toNumber = (x: string) => Number(x);

export const parseValue = R.pipe(
  toNumber,
  R.when(
    isNaN,
    N,
  ),
);

/**
 * Takes user input as a string and returns a list of values
 * @param {string} input a string representation of BST
 * @returns array representation of BST
 */
export const parseInput = R.pipe(
  R.replace(/[, ]+/g, ' '),
  R.split(' '),
  R.map(parseValue),
);

export default {};
