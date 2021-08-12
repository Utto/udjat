import valuesToNodes, {
  getChildIndices,
  nodeFactory,
} from '../../src/utils/bst';

const prefix = 'src/utils/bst';

describe(`${prefix}/getChildIndices`, () => {
  test('It should correctly return indices', () => {
    const input = 2;
    const output = [2, 5, 6];

    expect(getChildIndices(input)).toEqual(output);
  });
});

describe(`${prefix}/nodeFactory`, () => {
  test('It should correctly generate a BST node', () => {
    const result = nodeFactory(33, 1, '1-2', 'left');
    const output = {
      value: 33,
      parentId: '1-2',
      type: 'left',
      id: '1-33',
    };

    expect(result).toEqual(output);
  });
});

describe(`${prefix}/valuesToNodes`, () => {
  test('It should return a list of BST nodes', () => {
    const result = valuesToNodes([4, 2]);
    const output = [
      {
        id: '0-4',
        value: 4,
        parentId: undefined,
        type: undefined,
      },
      {
        id: '1-2',
        value: 2,
        parentId: '0-4',
        type: 'left',
      },
    ];

    expect(result).toEqual(output);
  });

  test('It should not generate duplicates or empty nodes', () => {
    const result = valuesToNodes([4, 2, 6, 1, 3, null, null]);
    expect(result).toHaveLength(5);
  });

  test('It should generate a single head node', () => {
    const result = valuesToNodes([4, 2, 6, 1, 3, null, null]);

    const heads = result.filter((x) => !x?.parentId);
    expect(heads).toHaveLength(1);
  });
});
