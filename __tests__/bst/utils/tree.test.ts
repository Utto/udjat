import {
  getTreeDepth,
  getShift,
  cleanNode,
  getPositionedNodes,
} from '../../../src/features/BST/utils/tree';

const prefix = 'src/features/BST/utils/tree';

describe(`${prefix}/getTreeDepth`, () => {
  test('It should return the correct depth of a given tree', () => {
    const input = {
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

    expect(getTreeDepth(input)).toBe(2);
  });
});

describe(`${prefix}/getShift`, () => {
  test('It should return -1 for node with type: left', () => {
    const input = {
      type: 'left',
    };
    expect(getShift(input)).toBe(-1);
  });
  test('It should return 1 for node with type: right or empty type', () => {
    const input1 = {
      type: 'right',
    };
    const input2 = {
      type: '',
    };
    expect(getShift(input1)).toBe(1);
    expect(getShift(input2)).toBe(1);
  });
});

describe(`${prefix}/cleanNode`, () => {
  test('It should return an object without "left" and "right" keys', () => {
    const input = {
      left: 'foo',
      right: 'bar',
    };
    expect(cleanNode(input)).toEqual({});
  });

  describe(`${prefix}/getPositionedNodes`, () => {
    test('It should return a list of nodes with x- and y-coordinates', () => {
      const input = {
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

      const result = getPositionedNodes(input);
      expect(result).toHaveLength(3);
      result.map((node) => {
        expect(node).toHaveProperty('x');
        expect(node).toHaveProperty('y');
        return node;
      });
    });
  });
});
