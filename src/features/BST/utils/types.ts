export type inputList = (number | null)[];

export type treeNode = {
  id: string,
  value: number,
  left: treeNode,
  right: treeNode,
  parentId?: string,
  type: string,
  depth: number,
} | null;
