import { describe, it, expect } from 'vitest';
import { preOrder, inOrder, lastOrder, traverseInOrderThread } from '.';
import { TreeNode } from '../index';

describe('遍历', () => {
  const node = new TreeNode(1)
  const node2 = new TreeNode(2)
  const node3 = new TreeNode(3)
  node2.insertLeft(new TreeNode(4))
  node2.insertRight(new TreeNode(5))
  node3.insertLeft(new TreeNode(6))
  node3.insertRight(new TreeNode(7))
  node.insertLeft(node2)
  node.insertRight(node3)
  //    1
  //  2    3
  // 4 5  6 7

  it('前序遍历', () => {
    expect(preOrder(node)).toEqual([1, 2, 4, 5, 3, 6, 7])
  })
  it('中序遍历', () => {
    expect(inOrder(node)).toEqual([4, 2, 5, 1, 6, 3, 7])
  })
  it('后序遍历', () => {
    expect(lastOrder(node)).toEqual([4, 5, 2, 6, 7, 3, 1])
  })
  it('中序遍历的线索化遍历', () => {
    expect(traverseInOrderThread(node)).toEqual([4, 2, 5, 1, 6, 3, 7])
  })
})
