import { TreeNode } from "../index"

export const preOrder = (node: TreeNode | null, result: TreeNode['key'][] = []) => {
  if (node === null) return

  result.push(node.key)
  preOrder(node.left, result)
  preOrder(node.right, result)

  return result
}

export const inOrder = (node: TreeNode | null, result: TreeNode['key'][] = []) => {
  if (node === null) return

  inOrder(node.left, result)
  result.push(node.key)
  inOrder(node.right, result)

  return result
}

export const lastOrder = (node: TreeNode | null, result: TreeNode['key'][] = []) => {
  if (node === null) return

  lastOrder(node.left, result)
  lastOrder(node.right, result)
  result.push(node.key)

  return result
}

const buildInOrderThread = (node: TreeNode | null) => {
  type Option = {
    preNode: TreeNode | null,
    firstNode: TreeNode | null
  }
  const buildInOrderThreadBase = (node: TreeNode | null, option: Option) => {
    if (node === null) return option

    if (!node.lTag) {
      buildInOrderThreadBase(node.left, option)
    }

    // 建立当前叶子节点的前驱
    if (node.left === null) {
      node.lTag = 1
      node.left = option.preNode
    }
    // 建立前一个叶子节点的后继指向当前
    if (option.preNode && option.preNode.right === null) {
      option.preNode.rTag = 1
      option.preNode.right = node
    }
    option.preNode = node
    if (!option.firstNode) {
      option.firstNode = node
    }

    if (!node.rTag) {
      buildInOrderThreadBase(node.right, option)
    }

    return option
  }

  const option = buildInOrderThreadBase(node, {
    preNode: null,
    firstNode: null
  })
  if (option?.preNode) {
    option.preNode.right = null
    option.preNode.rTag = 1
  }

  return option.firstNode
}
const getNextNode = (node: TreeNode | null) => {
  if (!node) return node

  if (node.rTag === 1) return node.right

  if (node.right) {
    node = node.right

    while (!node.lTag && node.left) {
      node = node.left
    }
  }

  return node
}

export const traverseInOrderThread = (node: TreeNode | null) => {
  let firstNode = buildInOrderThread(node)

  const result: TreeNode['key'][] = []
  while (firstNode) {
    result.push(firstNode?.key)
    firstNode = getNextNode(firstNode)
  }

  return result
}
