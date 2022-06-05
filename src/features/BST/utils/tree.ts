import * as R from 'ramda';
import { TreeNode } from './types';

import {
  WIDTH,
  NODE_SIZE,
  X_MARGIN,
  Y_MARGIN,
} from '../constants';

/** Calculates a full depth of BST */
export const getTreeDepth = (root: TreeNode): number => {
  if (!root) return 0;
  const leftHeight = getTreeDepth(root.left);
  const rightHeight = getTreeDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

/** Determines a shift for node based on its type: -1 | 1 */
export const getShift = R.pipe(
  R.when(
    R.propEq('type', 'left'),
    R.always(-1),
  ),
  R.when(
    R.complement(R.is(Number)),
    R.always(1),
  ),
);

export const cleanNode = R.omit(['left', 'right']);

/** Breadth First; takes a root node and returns an array of nodes
 * with coordinates
 */
export const getPositionedNodes = (root: TreeNode) => {
  if (!root) return [];
  const treeDepth = getTreeDepth(root);

  const nodes = [];
  const map = {
    [root.id]: {
      x: (WIDTH / 2) - (NODE_SIZE / 2),
      y: 25,
    },
  };

  let nodeDistance = Math.min(2 ** (treeDepth - 1) * (NODE_SIZE + X_MARGIN), WIDTH);

  let oldDepth = 1;

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (!node) break;
    // root
    if (!node.parentId) {
      nodes.push({ ...cleanNode(node), ...map[node.id] });
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      continue;
    }

    const parentData = map[node.parentId];

    if (node.depth !== oldDepth) nodeDistance /= 2;

    oldDepth = node.depth;

    const x = parentData.x + getShift(node) * (nodeDistance / 2);
    const y = parentData.y + Y_MARGIN;

    map[node.id] = {
      x,
      y,
    };

    nodes.push({
      ...cleanNode(node),
      x,
      y,
    });
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return nodes;
};
