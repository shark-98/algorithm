import { describe, it, expect } from 'vitest';
import { TreeNode, isSubStructure } from './index';

describe('树的子结构', () => {
  it('A = [1,2,3], B = [3,1]', () => {
    const A = new TreeNode(1)
    A.left = new TreeNode(2)
    A.right = new TreeNode(3)

    const B = new TreeNode(3)
    B.left = new TreeNode(1)

    expect(isSubStructure(A, B)).toEqual(false)
  })

  it('A = [3,4,5,1,2], B = [4,1]', () => {
    const A = new TreeNode(3)
    const node1 = new TreeNode(4)
    const node2 = new TreeNode(5)
    A.left = node1
    A.right = node2

    node1.left = new TreeNode(1)
    node1.right = new TreeNode(2)

    const B = new TreeNode(4)
    B.left = new TreeNode(1)

    expect(isSubStructure(A, B)).toEqual(true)
  })

  it('A = [10,12,6,8,3,11], B = [10,12,6,8]', () => {
    const A = new TreeNode(10)
    const node1 = new TreeNode(12)
    const node2 = new TreeNode(6)
    A.left = node1
    A.right = node2

    node1.left = new TreeNode(8)
    node1.right = new TreeNode(3)

    node2.left = new TreeNode(11)

    const B = new TreeNode(10)
    const _node1 = new TreeNode(12)
    const _node2 = new TreeNode(6)
    B.left = _node1
    B.right = _node2

    _node1.left = new TreeNode(8)

    expect(isSubStructure(A, B)).toEqual(true)
  })

  it('A = [4,2,3,4,5,6,7,8,9], B = [4,8,9]', () => {
    const A = new TreeNode(4)
    const node1 = new TreeNode(2)
    const node2 = new TreeNode(3)
    A.left = node1
    A.right = node2

    const node3 = new TreeNode(4)
    node3.left = new TreeNode(8)
    node3.right = new TreeNode(9)
    const node4 = new TreeNode(5)
    node1.left = node3
    node1.right = node4

    node2.left = new TreeNode(6)
    node2.right = new TreeNode(7)

    const B = new TreeNode(4)
    const _node1 = new TreeNode(8)
    const _node2 = new TreeNode(9)
    B.left = _node1
    B.right = _node2

    expect(isSubStructure(A, B)).toEqual(true)
  })

  it('A = [3,5,0,3,4], B = [1,-4,2,-1,3,-3,-4,0,-3,-1]', () => {
    const A = new TreeNode(3)
    const _node1 = new TreeNode(5)
    const _node2 = new TreeNode(0)
    A.left = _node1
    A.right = _node2
    _node1.left = new TreeNode(3)
    _node1.right = new TreeNode(4)

    const B = new TreeNode(1)
    const node1 = new TreeNode(-4)
    const node2 = new TreeNode(2)
    B.left = node1
    B.right = node2

    const node3 = new TreeNode(-1)
    const node4 = new TreeNode(3)
    node1.left = node3
    node1.right = node4
    node3.left = new TreeNode(0)
    node3.right = new TreeNode(-3)
    node4.left = new TreeNode(-1)

    const node5 = new TreeNode(-3)
    const node6 = new TreeNode(-4)
    node2.left = node5
    node2.right = node6

    expect(isSubStructure(A, B)).toEqual(false)
  })

  it('A = [5,4,1,2,3], B = [8,10,4,6,5]', () => {
    const A = new TreeNode(5)
    const node1 = new TreeNode(4)
    const node2 = new TreeNode(1)
    A.left = node1
    A.right = node2

    node1.left = new TreeNode(2)
    node1.right = new TreeNode(3)

    const B = new TreeNode(8)
    const _node1 = new TreeNode(10)
    const _node2 = new TreeNode(4)
    B.left = _node1
    B.right = _node2

    _node1.left = new TreeNode(6)
    _node1.right = new TreeNode(5)

    expect(isSubStructure(A, B)).toEqual(false)
  })
})

