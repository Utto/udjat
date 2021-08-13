import { inputList, treeNode } from './types';

/**
 * Takes an index of the value and returns the list of indices for left and right children
 * @param i Index of the node
 * @returns indices of 1-lvl children
 */
export const getChildIndices = (i: number) => ([2 * i + 1, 2 * i + 2]);

export const initBST = (
  list: inputList,
  type = '',
  index = 0,
  depth = 1,
  parentId?: string,
): treeNode => {
  if (index > list.length - 1) return null;
  if (!list.length) return null;
  if (list[index] === null) return null;

  const [leftIndex, rightIndex] = getChildIndices(index);

  const node: treeNode = {
    id: `${index}-${list[index]}`,
    value: list[index] as number,
    type,
    left: null,
    right: null,
    depth,
    parentId,
  };

  node.left = initBST(list, 'left', leftIndex, depth + 1, node.id);
  node.right = initBST(list, 'right', rightIndex, depth + 1, node.id);
  return node;
};