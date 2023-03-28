import { describe, it, expect } from 'vitest';
import { preOrder } from '../遍历与线索化/index';
import { TreeNode } from '../index';
import { serialize } from './index';

describe('广义表', () => {
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

  it('广义表序列化', () => {
    expect(serialize(node)).toEqual('1(2(4, 5), 3(6, 7))')
  })
})
