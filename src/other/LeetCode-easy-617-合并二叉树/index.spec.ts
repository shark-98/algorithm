import { describe, it, expect } from 'vitest';
import { mergeTrees, TreeNode } from './index';

describe('合并二叉树', () => {
  it('1', () => {
    const root1 = new TreeNode(1)
    const root1_1 = new TreeNode(3)
    const root1_2 = new TreeNode(2)
    const root1_3 = new TreeNode(5)
    root1.left = root1_1
    root1.right = root1_2
    root1_1.left = root1_3

    const root2 = new TreeNode(2)
    const root2_1 = new TreeNode(1)
    const root2_2 = new TreeNode(3)
    const root2_3 = new TreeNode(4)
    const root2_4 = new TreeNode(7)
    root2.left = root2_1
    root2.right = root2_2
    root2_1.left = null
    root2_1.right = root2_3
    root2_2.left = null
    root2_2.right = root2_4

    const r = new TreeNode(3)
    const r1 = new TreeNode(4)
    const r2 = new TreeNode(5)
    const r3 = new TreeNode(5)
    const r4 = new TreeNode(4)
    const r5 = new TreeNode(7)
    r.left = r1
    r.right = r2
    r1.left = r3
    r1.right = r4
    r2.left = null
    r2.right = r5

    expect(mergeTrees(root1, root2)).toEqual(r)
  })

  it('2', () => {
    const root1 = new TreeNode(1)

    const root2 = new TreeNode(1)
    const root2_1 = new TreeNode(2)
    root2.left = root2_1

    const r = new TreeNode(2)
    const r1 = new TreeNode(2)
    r.left = r1

    expect(mergeTrees(root1, root2)).toEqual(r)
  })
})
