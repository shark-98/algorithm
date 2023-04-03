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

export function levelOrder(root: TreeNode | null): number[][] {
  return case2(root)
};

const case1 = (root: TreeNode | null, result: number[][] = [], i: number = 0): number[][] => {
  if (!root) {
    return []
  }

  if (!result[i]) {
    result[i] = []
  }
  result[i].push(root.val)

  if (root.left) {
    case1(root.left, result, i + 1)
  }
  if (root.right) {
    case1(root.right, result, i + 1)
  }

  return result
}

const case2 = (root: TreeNode | null): number[][] => {
  if (!root) {
    return []
  }

  const queue: TreeNode[] = [root]
  const result: number[][] = []
  let node: TreeNode | undefined

  while (queue.length) {
    const size = queue.length
    result.push([])
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      if (node) {
        result[result.length - 1].push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
  }

  return result
}
