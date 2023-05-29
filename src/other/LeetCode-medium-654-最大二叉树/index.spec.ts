import { describe, it, expect } from 'vitest';
import { TreeNode, constructMaximumBinaryTree } from './index';

describe('最大二叉树', () => {
  it('1', () => {
    const nums = [3, 2, 1, 6, 0, 5]

    const head = new TreeNode(6)
    const node1 = new TreeNode(3)
    const node2 = new TreeNode(5)
    const node3 = new TreeNode(2)
    const node4 = new TreeNode(0)
    const node5 = new TreeNode(1)

    head.left = node1
    head.right = node2
    node1.left = null
    node1.right = node3
    node3.left = null
    node3.right = node5
    node2.left = node4
    node2.right = null

    const r = constructMaximumBinaryTree(nums)
    expect(r).toEqual(head)
  })

  it('2', () => {
    const nums = [3, 2, 1]

    const head = new TreeNode(3)
    const node1 = new TreeNode(2)
    const node2 = new TreeNode(1)

    head.left = null
    head.right = node1
    node1.left = null
    node1.right = node2

    const r = constructMaximumBinaryTree(nums)
    expect(r).toEqual(head)
  })
})
