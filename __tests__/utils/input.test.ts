import {
  parseValue,
  parseInput,
} from '../../src/utils/input';

const prefix = 'src/utils/input';

describe(`${prefix}/parseValue`, () => {
  test('It should convert a string representation of number to actual number', () => {
    const input = '2';
    expect(parseValue(input)).toBe(2);
  });

  test('It should return null if result is NaN', () => {
    expect(parseValue('foo')).toBeNull();
  });
});

describe(`${prefix}/parseInput`, () => {
  test('It should parse a comma-separated string without spaces', () => {
    const input = '1,22,2';
    const result = [1, 22, 2];
    expect(parseInput(input)).toEqual(result);
  });

  test('It should parse a comma-separated string with any number of spaces', () => {
    const input = '1,22,2,   776,  13';
    const result = [1, 22, 2, 776, 13];
    expect(parseInput(input)).toEqual(result);
  });

  test('It should replace any non-numeric value with null', () => {
    const input = '1, foo, 5, bar, baz';
    const result = [1, null, 5, null, null];
    expect(parseInput(input)).toEqual(result);
  });
});
