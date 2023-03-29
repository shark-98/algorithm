import { describe, it, expect } from 'vitest';
import { preOrder } from '../遍历与线索化/index';
import { TreeNode } from '../index';
import { serialize, deserialize } from './index';

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

  const nodeA = new TreeNode('a')
  const nodeB = new TreeNode('b')
  const nodeC = new TreeNode('c')
  nodeB.insertLeft(new TreeNode('d'))
  nodeB.insertRight(new TreeNode('e'))
  nodeC.insertLeft(new TreeNode('f'))
  nodeC.insertRight(new TreeNode('g'))
  nodeA.insertLeft(nodeB)
  nodeA.insertRight(nodeC)
  //    a
  //  b    c
  // d e  f g

  it('前序遍历', () => {
    expect(preOrder(node)).toEqual([1, 2, 4, 5, 3, 6, 7])

    expect(preOrder(nodeA)).toEqual(['a', 'b', 'd', 'e', 'c', 'f', 'g'])
  })

  it('广义表序列化', () => {
    expect(serialize(node)).toEqual('1(2(4, 5), 3(6, 7))')

    expect(serialize(nodeA)).toEqual('a(b(d, e), c(f, g))')
  })

  it('广义表反序列化', () => {
    const s = serialize(node)
    const tree = deserialize(s)
    expect(preOrder(tree)).toEqual([1, 2, 4, 5, 3, 6, 7])

    const sA = serialize(nodeA)
    const treeA = deserialize(sA)
    expect(preOrder(treeA)).toEqual(['a', 'b', 'd', 'e', 'c', 'f', 'g'])
  })
})
