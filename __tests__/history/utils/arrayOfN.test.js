import arrayOfN from '../../../src/features/History/utils/arrayOfN';

const prefix = 'src/features/History/utils/arrayOfN';

describe(`${prefix}`, () => {
  test('It should just add an item to array if length doesnt exceed max value', () => {
    const length = 3;
    const arrayOf = arrayOfN(length);
    const acc = [1, 2];
    const result = arrayOf(3, acc);
    expect(result).toHaveLength(length);
    expect(result).toEqual([1, 2, 3]);
  });

  test('It should remove first N items and append new ones if the length exceeds', () => {
    const length = 5;
    const arrayOf = arrayOfN(length);
    const acc = [0, 1, 2, 3, 4];
    const result = arrayOf([144, 50, 10], acc);
    expect(result).toHaveLength(length);
    expect(result).toEqual([3, 4, 144, 50, 10]);
  });
});
