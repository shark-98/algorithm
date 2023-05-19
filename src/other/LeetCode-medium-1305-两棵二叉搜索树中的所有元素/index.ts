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

export function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const getArray = (node: TreeNode | null): number[] => {
    const arr: number[] = []

    const middleSearch = (node: TreeNode | null): void => {
      if (!node) return

      middleSearch(node.left)
      arr.push(node.val)
      middleSearch(node.right)
    }

    middleSearch(node)
    return arr
  }

  const arr1 = getArray(root1)
  const arr2 = getArray(root2)

  const n1 = arr1.length
  const n2 = arr2.length
  let i = 0, j = 0
  const r: number[] = []

  while (i < n1 || j < n2) {
    if (j >= n2 || (i < n1 && arr1[i] < arr2[j])) {
      r.push(arr1[i++])
    } else {
      r.push(arr2[j++])
    }
  }

  return r
};
