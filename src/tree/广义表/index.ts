import { TreeNode } from "../index";

export const serialize = (node: TreeNode | null): string => {
  const fn = (node: TreeNode | null): string => {
    if (!node) return result

    result += node.key
    if (node.left && node.right) {
      result += '('
    }

    fn(node.left)

    if (node.right) {
      result += ', '
      fn(node.right)
    }

    if (node.left && node.right) {
      result += ')'
    }

    return result
  }

  let result: string = ''

  return fn(node)
};
