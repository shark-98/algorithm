import { describe, it, expect } from 'vitest';
import { TreeNode, levelOrderBottom } from './index';

describe('二叉树的层序遍历 II', () => {
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

    expect(levelOrderBottom(tree)).toEqual([[15, 7], [9, 20], [3]])
  })

  it('[1]', () => {
    const tree = new TreeNode(1)
    expect(levelOrderBottom(tree)).toEqual([[1]])
  })

  it('[]', () => {
    const tree = null
    expect(levelOrderBottom(tree)).toEqual([])
  })
})

