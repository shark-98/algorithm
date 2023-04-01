import { TreeNode } from "../index";

export const createHuffmanCode = (s: string) => {
  const charProbabilityList = getCharProbabilityList(s)
  IS_CONSOLE && console.log(charProbabilityList);

  const huffmanTree = createHuffmanTree(charProbabilityList)
  IS_CONSOLE && console.log(huffmanTree);

  const codeHash = extractHuffmanTree(huffmanTree)
  IS_CONSOLE && console.log(codeHash);

  return codeHash
};

type CharItem = {
  key: string,
  probability: number
}
type CharList = CharNode[]
type CharNode = CharItem | TreeNode

const getCharProbabilityList = (s: string): CharList => {
  const hash = {}
  const len = s.length

  for (let i = 0; i < len; i++) {
    const char = s[i]
    hash[char] = hash[char] ? (hash[char] + 1) : 1
  }

  const result: CharList = []
  for (const key in hash) {
    if (Object.prototype.hasOwnProperty.call(hash, key)) {
      result.push({ key, probability: hash[key] / len })
    }
  }

  return result.sort((a, b) => a.probability - b.probability)
}

let newNode: TreeNode | null = null
const createHuffmanTree = (list: CharList): TreeNode | null => {
  const minNode = list.shift()
  const nextMinNode = list.shift()

  if (!minNode) {
    return null
  }
  if (!nextMinNode) {
    return newNode
  }

  newNode = mergeNode(minNode, nextMinNode)

  list.unshift(newNode)
  return createHuffmanTree(list)
}

const mergeNode = (node1: CharNode, node2: CharNode): TreeNode => {
  const tree1 = (node1['isTree'] ? node1 : new TreeNode(node1.key)) as TreeNode
  const tree2 = (node2['isTree'] ? node2 : new TreeNode(node2.key)) as TreeNode

  const node = new TreeNode(`${node1.key}-${node2.key}`)
  node.left = tree2
  node.right = tree1

  return node
}

const extractHuffmanTree = (node: TreeNode | null, buff: string[] = [], k: number = 0, codeHash: Record<string, string> = {}): Record<string, string> => {
  if (!node) {
    return codeHash
  }

  if (!node.left && !node.right) {
    codeHash[node.key as string] = buff.join('')
    return codeHash
  }

  buff[k] = '0'
  extractHuffmanTree(node.left, buff, k + 1, codeHash)

  buff[k] = '1'
  extractHuffmanTree(node.right, buff, k + 1, codeHash)

  return codeHash
}

const IS_CONSOLE = false
