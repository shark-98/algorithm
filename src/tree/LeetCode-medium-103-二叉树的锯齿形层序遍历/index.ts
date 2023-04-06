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

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  return case2(root)
};

const case1 = (root: TreeNode | null): number[][] => {
  const dfs = (root: TreeNode | null, k: number) => {
    if (!root) {
      return []
    }

    if (!result[k]) {
      result[k] = []
    }
    result[k].push(root.val)
    dfs(root.left, k + 1)
    dfs(root.right, k + 1)
  }

  const result: number[][] = []
  dfs(root, 0)

  for (let i = 1; i < result.length; i += 2) {
    result[i].reverse()
  }

  return result
}


const case2 = (root: TreeNode | null): number[][] => {
  const dfs = (root: TreeNode | null, k: number) => {
    if (!root) {
      return []
    }

    if (!result[k]) {
      result[k] = []
    }
    if (k % 2 === 0) {
      result[k].push(root.val)
    } else {
      result[k].unshift(root.val)
    }
    dfs(root.left, k + 1)
    dfs(root.right, k + 1)
  }

  const result: number[][] = []
  dfs(root, 0)

  return result
}
