import { describe, it, expect } from 'vitest';
import { delNodes, TreeNode } from './index';

describe('删点成林', () => {
  it('root = [1,2,3,4,5,6,7], to_delete = [3,5]', () => {
    const root = new TreeNode(1), to_delete = [3, 5]

    const node1 = new TreeNode(2)
    const node2 = new TreeNode(3)
    const node3 = new TreeNode(4)
    const node4 = new TreeNode(5)
    const node5 = new TreeNode(6)
    const node6 = new TreeNode(7)
    root.left = node1
    root.right = node2
    node1.left = node3
    node1.right = node4
    node2.left = node5
    node2.right = node6

    const e1 = new TreeNode(1)
    const e2 = new TreeNode(2)
    const e3 = null
    const e4 = new TreeNode(4)
    e1.left = e2
    e1.right = e3
    e2.left = e4


    const f1 = new TreeNode(6)
    const g1 = new TreeNode(7)

    const r = delNodes(root, to_delete)
    expect(r).toEqual([e1, f1, g1])
  })

  it('root = [1,2,4,null,3], to_delete = [3]', () => {
    const root = new TreeNode(1), to_delete = [3]

    const node1 = new TreeNode(2)
    const node2 = new TreeNode(4)
    const node3 = null
    const node4 = new TreeNode(3)
    root.left = node1
    root.right = node2
    node1.left = node3
    node1.right = node4

    const e1 = new TreeNode(1)
    const e2 = new TreeNode(2)
    const e3 = new TreeNode(4)
    e1.left = e2
    e1.right = e3

    const r = delNodes(root, to_delete)
    expect(r).toEqual([e1])
  })

  it('root = [1,null,2,null,3,null,4], to_delete = [3]', () => {
    const root = new TreeNode(1), to_delete = [3]

    const node1 = null
    const node2 = new TreeNode(2)
    const node3 = null
    const node4 = new TreeNode(3)
    const node5 = null
    const node6 = new TreeNode(4)
    root.left = node1
    root.right = node2
    node2.left = node3
    node2.right = node4
    node4.left = node5
    node4.right = node6

    const e1 = new TreeNode(1)
    const e2 = null
    const e3 = new TreeNode(2)
    e1.left = e2
    e1.right = e3

    const f1 = new TreeNode(4)

    const r = delNodes(root, to_delete)
    expect(r).toEqual([e1, f1])
  })

  it('root = [1,2,3,null,null,null,4], to_delete = [2,1]', () => {
    const root = new TreeNode(1), to_delete = [2, 1]

    const node1 = new TreeNode(2)
    const node2 = new TreeNode(3)
    const node3 = null
    const node4 = null
    const node5 = null
    const node6 = new TreeNode(4)
    root.left = node1
    root.right = node2
    node1.left = node3
    node1.right = node4
    node2.left = node5
    node2.right = node6

    const e1 = new TreeNode(3)
    const e2 = null
    const e3 = new TreeNode(4)
    e1.left = e2
    e1.right = e3

    const r = delNodes(root, to_delete)
    expect(r).toEqual([e1])
  })

  it('root = [1,3,2,null,6,4,null,null,null,5], to_delete = [2,5,3]', () => {
    const root = new TreeNode(1), to_delete = [2, 5, 3]

    const node1 = new TreeNode(3)
    const node2 = new TreeNode(2)
    const node3 = null
    const node4 = new TreeNode(6)
    const node5 = new TreeNode(4)
    const node6 = null
    const node7 = null
    const node8 = null
    const node9 = new TreeNode(5)
    root.left = node1
    root.right = node2
    node1.left = node3
    node1.right = node4
    node2.left = node5
    node2.right = node6
    node4.left = node7
    node4.right = node8
    node5.left = node9

    const e1 = new TreeNode(1)
    const e2 = new TreeNode(6)
    const e3 = new TreeNode(4)

    const r = delNodes(root, to_delete)
    expect(r).toEqual([e1, e2, e3])
  })
})
