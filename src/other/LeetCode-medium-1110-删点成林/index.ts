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

export function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  return case2(root, to_delete)
};


function case1(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const r: Array<TreeNode | null> = []

  const getTree = (root: TreeNode | null, isPush: boolean, parent: TreeNode | null = root) => {
    if (root === null) return null

    if (to_delete.includes(root.val)) {
      if (parent?.left?.val === root.val) {
        parent.left = null
      }
      if (parent?.right?.val === root.val) {
        parent.right = null
      }

      if (root.left) {
        getTree(root.left, true, root)
      }
      if (root.right) {
        getTree(root.right, true, root)
      }
    } else {
      if (isPush) {
        r.push(root)
      }
      getTree(root.left, false, root)
      getTree(root.right, false, root)
    }
  }

  getTree(root, true)

  return r
};

function case2(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const r: Array<TreeNode | null> = []

  const hash = to_delete.reduce((total, cur) => {
    total[cur] = true
    return total
  }, {})

  const dfs = (node: TreeNode | null, isRoot: boolean) => {
    if (node === null) return null

    const isDelete = hash[node?.val || '']

    node.right = dfs(node.right, isDelete);
    node.left = dfs(node.left, isDelete);

    if (isDelete) {
      return null
    } else {
      if (isRoot) {
        r.unshift(node)
      }
      return node
    }
  }

  dfs(root, true)

  return r
}
