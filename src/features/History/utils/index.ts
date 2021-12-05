import * as R from 'ramda';

const asList = R.when(
  R.complement(R.is(Array)),
  R.of,
);

const mergeTwo = (data: any, acc: any[]) => R.concat(acc, asList(data));
const dropFirstN = (max: number) => (list: any[]) => R.drop(R.negate(max - list.length), list);

const addToFixed = (total: number) => R.pipe(
  mergeTwo,
  dropFirstN(total),
);

export default addToFixed;
