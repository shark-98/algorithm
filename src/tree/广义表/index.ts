import { TreeNode } from "../index";

export const serialize = (node: TreeNode | null): string => {
  const fn = (node: TreeNode | null): string => {
    if (!node) return result

    result += node.key
    if (node.left && node.right) {
      result += '('
    }

    fn(node.left)

    if (node.right) {
      result += ', '
      fn(node.right)
    }

    if (node.left && node.right) {
      result += ')'
    }

    return result
  }

  let result: string = ''

  return fn(node)
};

export const deserialize = (s: string): TreeNode | null => {
  if (!s.length) {
    return null
  }

  const stack: TreeNode[] = []
  let flag = 0 // 0-左子树; 1-右子树
  let p: TreeNode | null = null
  let root: TreeNode | null = null // 根节点
  const keywordHash = {
    '(': 1,
    ',': 2,
    ')': 3,
  }
  let scode = 0 // 状态机状态: 0-分发任务; 1-遇到(; 2-遇到,; 3-遇到); 4-处理节点;

  const initScode = () => {
    scode = 0
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (scode === 0) {
      scode = keywordHash[char] || 4
      i--
    } else {
      if (scode === 1) {
        flag = 0
        p && stack.push(p)
      } else if (scode === 2) {
        flag = 1
      } else if (scode === 3) {
        if (stack.length) {
          root = stack.pop()!
        }
      } else if (scode === 4) {
        let key: number | string = ''
        while (!keywordHash[s[i]]) {
          key += s[i++]
        }
        key = key.trim()
        const isOfString = /\D/.test(key)
        if (!isOfString) {
          key = Number(key)
        }
        p = new TreeNode(key)

        const len = stack.length
        if (len) {
          if (flag === 0) {
            stack[len - 1].left = p
          } else if (flag === 1) {
            stack[len - 1].right = p
          }
        }

        i--
      }
      initScode()
    }
  }

  return root
};
