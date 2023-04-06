import { describe, it, expect } from 'vitest';
import { TreeNode, zigzagLevelOrder } from './index';

describe('二叉树的锯齿形层序遍历', () => {
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

    expect(zigzagLevelOrder(tree)).toEqual([[3], [20, 9], [15, 7]])
  })

  it('[1]', () => {
    const tree = new TreeNode(1)
    expect(zigzagLevelOrder(tree)).toEqual([[1]])
  })

  it('[]', () => {
    const tree = null
    expect(zigzagLevelOrder(tree)).toEqual([])
  })

  it('[1,2,3,4,5,6,7,8,null,null,9,10,null,null,11]', () => {
    const tree = new TreeNode(1)
    const node1 = new TreeNode(2)
    const node2 = new TreeNode(3)
    tree.left = node1
    tree.right = node2

    const node3 = new TreeNode(4)
    const node4 = new TreeNode(5)
    node1.left = node3
    node1.right = node4

    const node5 = new TreeNode(6)
    const node6 = new TreeNode(7)
    node2.left = node5
    node2.right = node6

    node3.left = new TreeNode(8)
    node4.right = new TreeNode(9)
    node5.left = new TreeNode(10)
    node6.right = new TreeNode(11)

    expect(zigzagLevelOrder(tree)).toEqual([[1], [3, 2], [4, 5, 6, 7], [11, 10, 9, 8]])
  })
})

