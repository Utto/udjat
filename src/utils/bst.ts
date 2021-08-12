import * as R from 'ramda';

type inputList = (number | null)[];

type treeNode = {
  id: string,
  value: number,
  left?: treeNode,
  right?: treeNode,
  parentId?: string,
  type?: string,
} | void;

type PropsFn<T, U> = (indices: T[], list: U[]) => T[];

/**
 * Takes an index of the value and returns the list of indices for this value and
 * it's right and left children
 * @param i Index of the node
 * @returns {number[]} indices of value and it's 1-lvl children
 */
export const getChildIndices = (i: number) => ([i, 2 * i + 1, 2 * i + 2]);

export const pickByIndices = R.pipe(
  R.props as PropsFn<number, number|null>,
  R.filter(Boolean),
);

/** Generates a node: treeNode */
export const nodeFactory = (
  value: number,
  index: number,
  parentId?: string,
  type?: string,
): treeNode => ({
  value,
  parentId,
  type,
  id: `${index}-${value}`,
});

/** Takes a list of value-representation of node and it's 1-lvl children
 * and returns their treeNode representations
*/
export const nodeTripletFactory = (list: number[], indices: number[]): treeNode[] => {
  const [head, left, right] = list;

  const parentNode = nodeFactory(head, indices[0]);

  return [
    parentNode,
    nodeFactory(left, indices[1], parentNode?.id, 'left'),
    nodeFactory(right, indices[2], parentNode?.id, 'right'),
  ];
};

/** Takes number|null[] representation of BST
 * and returns a list of tree nodes
 */
const valuesToNodes = (values: inputList): treeNode[] => {
  const ids = new Set();

  const validateNode = (node: treeNode) => {
    if (!node || R.isNil(node.value)) return false;

    const { id } = node;
    if (!ids.has(id)) {
      ids.add(id);
      return true;
    }
    return false;
  };

  return values.reduce((a: treeNode[], c: number|null, i: number, list) => {
    if (R.isNil(c)) return a;

    const tripletIndices = getChildIndices(i);
    const maybeTriplet = pickByIndices(tripletIndices, list);

    const nodes = nodeTripletFactory(maybeTriplet, tripletIndices).filter(validateNode);
    return [...a, ...nodes];
  }, []);
};

export default valuesToNodes;
