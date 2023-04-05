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

export function levelOrderBottom(root: TreeNode | null): number[][] {
  return case1(root)
};

const case1 = (root: TreeNode | null): number[][] => {
  if (!root) {
    return []
  }

  const queue: TreeNode[] = [root]
  const result: number[][] = []
  let node: TreeNode | undefined

  while (queue.length) {
    const size = queue.length
    const temp: number[] = []

    for (let i = 0; i < size; i++) {
      node = queue.shift()
      if (node) {
        temp.push(node.val)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }

    result.unshift(temp)
  }

  return result
}
