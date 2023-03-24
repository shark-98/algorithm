export class TreeNode {
  key: unknown;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(key: unknown) {
    this.key = key;
    this.left = null
    this.right = null
  }

  insertLeft(node: TreeNode) {
    this.left = node
  }
  insertRight(node: TreeNode) {
    this.right = node
  }
}

export const bfs = (root: TreeNode | null): TreeNode['key'][] | undefined => {
  if (root === null) return
  IS_CONSOLE && console.log('-----bfs------');
  const result: TreeNode['key'][] = []

  let head = 0
  let tail = 0
  const queue: TreeNode[] = []

  queue[tail++] = root
  while (head < tail) {
    const { key, left, right } = queue[head]
    if (left) {
      queue[tail++] = left
    }
    if (right) {
      queue[tail++] = right
    }
    head++

    IS_CONSOLE && console.log(`当前key: ${key}, 左key: ${left?.key}, 右key: ${right?.key}`);
    result.push(key)
  }

  return result
}

export const dfs = (root: TreeNode | null, result: TreeNode['key'][] = []): TreeNode['key'][] | undefined => {
  if (root === null) return
  result.push(root.key)
  const start = result.length

  if (root.left) {
    dfs(root.left, result)

    result.push(root.left.key)
  }
  if (root.right) {
    dfs(root.right, result)

    result.push(root.right.key)
  }
  const end = result.length + 1

  IS_CONSOLE && console.log(`当前key: ${root.key}, 开始下标: ${start}, 结束下标: ${end}`);

  return [...result, root.key]
}

const IS_CONSOLE = false
