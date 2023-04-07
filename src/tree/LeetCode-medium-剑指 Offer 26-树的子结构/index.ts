export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  return case2(A, B)
};

const serialize = (tree: TreeNode | null): string => {
  const fn = (tree: TreeNode | null) => {
    if (!tree) {
      return
    }

    code += `${tree.val}`
    if (tree.left || tree.right) {
      code += '('
    }

    fn(tree.left)
    if (tree.left) {
      code += `,`
    }

    fn(tree.right)

    if (tree.left || tree.right) {
      if (!tree.right) {
        code += ' '
      }
      code += `)`
    }
  }

  let code: string = ''
  fn(tree)
  return code
}

const case1 = (A: TreeNode | null, B: TreeNode | null): boolean => {
  if (!B) {
    return false
  }

  const ACode = serialize(A)
  let BCode = serialize(B)

  if (BCode.length > ACode.length) {
    return false
  }

  if (BCode[BCode.length - 1] === ')') {
    BCode = BCode.slice(0, BCode.length - 1)
  }

  let flag = true
  let isEntry = false

  for (let i = 0; i < ACode.length; i++) {
    if (ACode[i] === BCode[0]) {

      isEntry = true
      for (let j = 0; j < BCode.length; j++, i++) {
        const a = ACode[i]
        const b = BCode[j]
        if (a !== b && b !== ' ') {
          flag = false
          break
        } else if (j === BCode.length - 1) {
          flag = true
        }
      }
    }

    if (flag && isEntry) {
      break
    }
  }

  return flag
}

const checkEqual = (A: TreeNode | null, B: TreeNode | null): boolean => {
  if (!A) return !B
  if (!B) return true
  if (A.val !== B.val) return false
  return checkEqual(A.left, B.left) && checkEqual(A.right, B.right)
}
const case2 = (A: TreeNode | null, B: TreeNode | null): boolean => {
  if (!A || !B) return false
  if (A.val === B.val && checkEqual(A, B)) return true
  if (case2(A.left, B)) return true
  if (case2(A.right, B)) return true
  return false
}
