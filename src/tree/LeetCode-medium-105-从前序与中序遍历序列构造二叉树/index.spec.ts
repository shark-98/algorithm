import { describe, it, expect } from 'vitest';
import { buildTree, TreeNode } from './index';

describe('从前序与中序遍历序列构造二叉树', () => {
  it('preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]', () => {
    const preorder = [3, 9, 20, 15, 7]
    const inorder = [9, 3, 15, 20, 7]
    const tree = buildTree(preorder, inorder)

    const root = new TreeNode(3)

    const node1 = new TreeNode(9)
    const node2 = new TreeNode(20)
    root.left = node1
    root.right = node2

    const node3 = new TreeNode(15)
    const node4 = new TreeNode(7)
    node2.left = node3
    node2.right = node4

    expect(tree).toEqual(root)
  })

  it('preorder = [-1], inorder = [-1]', () => {
    const preorder = [-1]
    const inorder = [-1]
    const tree = buildTree(preorder, inorder)

    expect(tree).toEqual(new TreeNode(-1))
  })
})

