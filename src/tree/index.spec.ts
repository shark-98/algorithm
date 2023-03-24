import { describe, it, expect } from 'vitest';
import { bfs, dfs, TreeNode } from '.';

describe('tree', () => {
  it('only root', () => {
    const node = new TreeNode(1)

    expect(node).toEqual({ key: 1, left: null, right: null });
  })

  it('has left', () => {
    const node = new TreeNode(1)
    const leftNode = new TreeNode(2)
    node.insertLeft(leftNode)

    expect(node).toEqual({ key: 1, left: { key: 2, left: null, right: null }, right: null });
  })

  it('has right', () => {
    const node = new TreeNode(1)
    const leftNode = new TreeNode(3)
    node.insertRight(leftNode)

    expect(node).toEqual({ key: 1, left: null, right: { key: 3, left: null, right: null } });
  })

  const node = new TreeNode(1)
  const node2 = new TreeNode(2)
  const node3 = new TreeNode(3)
  node2.insertLeft(new TreeNode(4))
  node2.insertRight(new TreeNode(5))
  node3.insertLeft(new TreeNode(6))
  node3.insertRight(new TreeNode(7))
  node.insertLeft(node2)
  node.insertRight(node3)

  it('3 level tree', () => {
    expect(node).toEqual({
      key: 1,
      left: {
        key: 2,
        left: {
          key: 4,
          left: null,
          right: null
        },
        right: {
          key: 5,
          left: null,
          right: null
        }
      },
      right: {
        key: 3,
        left: {
          key: 6,
          left: null,
          right: null
        },
        right: {
          key: 7,
          left: null,
          right: null
        }
      }
    });
  })

  it('bfs', () => {
    expect(bfs(node)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('dfs', () => {
    expect(dfs(node)).toEqual([1, 2, 4, 4, 5, 5, 2, 3, 6, 6, 7, 7, 3, 1])
  })
})
