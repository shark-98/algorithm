import { describe, it, expect } from 'vitest';
import { TreeNode, getAllElements } from './index';

const test = (root1: TreeNode | null, root2: TreeNode | null, s: number[]) => {
  return () => {
    const r = getAllElements(root1, root2)
    expect(r).toEqual(s)
  }
}

const root1_a1 = new TreeNode(2)
const root1_a2 = new TreeNode(1)
const root1_a3 = new TreeNode(4)
root1_a1.left = root1_a2
root1_a1.right = root1_a3

const root1_b1 = new TreeNode(1)
const root1_b2 = new TreeNode(0)
const root1_b3 = new TreeNode(3)
root1_b1.left = root1_b2
root1_b1.right = root1_b3

const root2_a1 = new TreeNode(1)
const root2_a2 = null
const root2_a3 = new TreeNode(8)
root2_a1.left = root2_a2
root2_a1.right = root2_a3

const root2_b1 = new TreeNode(8)
const root2_b2 = new TreeNode(1)
root2_b1.left = root2_b2

describe('两棵二叉搜索树中的所有元素', () => {
  it('root1 = [2,1,4], root2 = [1,0,3]', test(root1_a1, root1_b1, [0, 1, 1, 2, 3, 4]))

  it('root1 = [1,null,8], root2 = [8,1]', test(root2_a1, root2_b1, [1, 1, 8, 8]))
})
