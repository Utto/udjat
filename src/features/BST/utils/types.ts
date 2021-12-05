export type TreeNode = {
  id: string,
  value: number,
  left: TreeNode,
  right: TreeNode,
  parentId?: string,
  type: string,
  depth: number,
} | null;
