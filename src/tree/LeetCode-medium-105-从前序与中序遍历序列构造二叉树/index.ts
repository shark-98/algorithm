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

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const n = preorder.length
  if (n === 0) {
    return null
  }

  let pos = 0
  while (inorder[pos] !== preorder[0]) pos++

  const root = new TreeNode(preorder[0])
  root.left = buildTree(preorder.slice(1, pos + 1), inorder.slice(0, pos))
  root.right = buildTree(preorder.slice(pos + 1, n), inorder.slice(pos + 1, n))

  return root
};
