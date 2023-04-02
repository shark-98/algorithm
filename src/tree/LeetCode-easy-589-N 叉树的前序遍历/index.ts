export class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val)
    this.children = []
  }
}

export function preorder(root: Node | null): number[] {
  return case1(root)
};

const fn = (root: Node | null, result: number[] = []): number[] => {
  if (!root) {
    return result
  }

  result.push(root.val)

  for (const node of root.children) {
    fn(node, result)
  }

  return result
}
const case1 = (root: Node | null): number[] => {
  return fn(root)
}
