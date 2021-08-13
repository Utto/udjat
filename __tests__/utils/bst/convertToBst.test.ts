import {
  getChildIndices,
  initBST,
} from '../../../src/features/BST/utils/convertToBst';

const prefix = 'src/features/BST/utils/convertToBst';

describe(`${prefix}/getChildIndices`, () => {
  test('It should correctly return indices', () => {
    const input = 2;
    const output = [5, 6];

    expect(getChildIndices(input)).toEqual(output);
  });
});

describe(`${prefix}/initBST`, () => {
  test('It should return a BST-like object', () => {
    const result = initBST([4, 2, 6, null, null]);
    const output = {
      depth: 1,
      id: '0-4',
      parentId: undefined,
      type: '',
      value: 4,
      left: {
        depth: 2,
        id: '1-2',
        left: null,
        parentId: '0-4',
        right: null,
        type: 'left',
        value: 2,
      },
      right: {
        depth: 2,
        id: '2-6',
        left: null,
        parentId: '0-4',
        right: null,
        type: 'right',
        value: 6,
      },
    };

    expect(result).toEqual(output);
  });
});
