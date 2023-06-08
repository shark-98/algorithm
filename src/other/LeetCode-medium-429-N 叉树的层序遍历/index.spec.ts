import { describe, it, expect } from 'vitest';
import { Node, levelOrder } from './index';

describe('N 叉树的层序遍历', () => {
  it('[1,null,3,2,4,null,5,6]', () => {
    const node = new Node(1)
    const node1 = new Node(3)
    const node2 = new Node(2)
    const node3 = new Node(4)
    const node4 = new Node(5)
    const node5 = new Node(6)
    node.children = [node1, node2, node3]
    node1.children = [node4, node5]

    const r = levelOrder(node)
    expect(r).toEqual([[1], [3, 2, 4], [5, 6]])
  })

  it('[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]', () => {
    const node = new Node(1)
    const node1 = new Node(2)
    const node2 = new Node(3)
    const node3 = new Node(4)
    const node4 = new Node(5)
    const node5 = new Node(6)
    const node6 = new Node(7)
    const node7 = new Node(8)
    const node8 = new Node(9)
    const node9 = new Node(10)
    const node10 = new Node(11)
    const node11 = new Node(12)
    const node12 = new Node(13)
    const node13 = new Node(14)
    node.children = [node1, node2, node3, node4]
    node2.children = [node5, node6]
    node3.children = [node7]
    node4.children = [node8, node9]
    node6.children = [node10]
    node7.children = [node11]
    node8.children = [node12]
    node10.children = [node13]

    const r = levelOrder(node)
    expect(r).toEqual([[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]])
  })
})
