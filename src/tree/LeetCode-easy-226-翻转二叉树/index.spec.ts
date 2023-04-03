import { describe, it, expect } from 'vitest';
import { TreeNode, invertTree } from './index';

describe('翻转二叉树', () => {
  it('[4,2,7,1,3,6,9]', () => {
    const tree = new TreeNode(4)
    const node1 = new TreeNode(2)
    const node2 = new TreeNode(7)
    tree.left = node1
    tree.right = node2
    const node3 = new TreeNode(1)
    const node4 = new TreeNode(3)
    node1.left = node3
    node1.right = node4
    const node5 = new TreeNode(6)
    const node6 = new TreeNode(9)
    node2.left = node5
    node2.right = node6

    const result = new TreeNode(4)
    const new_node1 = new TreeNode(7)
    const new_node2 = new TreeNode(2)
    result.left = new_node1
    result.right = new_node2
    const new_node3 = new TreeNode(9)
    const new_node4 = new TreeNode(6)
    new_node1.left = new_node3
    new_node1.right = new_node4
    const new_node5 = new TreeNode(3)
    const new_node6 = new TreeNode(1)
    new_node2.left = new_node5
    new_node2.right = new_node6

    expect(invertTree(tree)).toEqual(result)
  })

  it('[2,1,3]', () => {
    const tree = new TreeNode(2)
    const node1 = new TreeNode(1)
    const node2 = new TreeNode(3)
    tree.left = node1
    tree.right = node2

    const result = new TreeNode(2)
    const new_node1 = new TreeNode(3)
    const new_node2 = new TreeNode(1)
    result.left = new_node1
    result.right = new_node2

    expect(invertTree(tree)).toEqual(result)
  })

  it('[]', () => {
    const tree = null

    const result = null

    expect(invertTree(tree)).toEqual(result)
  })
})

