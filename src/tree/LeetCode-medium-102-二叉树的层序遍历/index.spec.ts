import { describe, it, expect } from 'vitest';
import { TreeNode, levelOrder } from './index';

describe('二叉树的层序遍历', () => {
  it('[3,9,20,null,null,15,7]', () => {
    const tree = new TreeNode(3)
    const node1 = new TreeNode(9)
    const node2 = new TreeNode(20)
    tree.left = node1
    tree.right = node2

    const node3 = new TreeNode(15)
    const node4 = new TreeNode(7)
    node2.left = node3
    node2.right = node4

    expect(levelOrder(tree)).toEqual([[3], [9, 20], [15, 7]])
  })

  it('[1]', () => {
    const tree = new TreeNode(1)
    expect(levelOrder(tree)).toEqual([[1]])
  })

  it('[]', () => {
    const tree = null
    expect(levelOrder(tree)).toEqual([])
  })
})

