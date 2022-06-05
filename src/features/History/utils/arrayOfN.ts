import * as R from 'ramda';

const addToFixed = (total: number) => R.pipe<
  unknown,
  unknown[],
  unknown[],
  unknown[],
  unknown[]
>(
  R.append,
  R.flatten,
  R.takeLast(total),
);

export default addToFixed;
