export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  return case1(root1, root2)
};

function case1(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (root1 === null) return root2

  if (root2 === null) return root1

  const root = new TreeNode(root1.val + root2.val)
  root.left = case1(root1.left, root2.left)
  root.right = case1(root1.right, root2.right)

  return root
};
