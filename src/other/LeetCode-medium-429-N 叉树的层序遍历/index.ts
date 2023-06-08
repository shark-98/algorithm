export class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val)
    this.children = []
  }
}

export function levelOrder(root: Node | null): number[][] {
  return case1(root)
};

function case1(root: Node | null): number[][] {
  const result: number[][] = []
  const fn = (root: Node | null, i: number = 0) => {
    if (root === null) return []

    if (!result[i]) result[i] = []

    result[i].push(root.val)

    const len = root.children.length
    
    for (let k = 0; k < len; k++) {
      fn(root.children[k], i + 1)
    }
  }

  fn(root, 0)

  return result
};
