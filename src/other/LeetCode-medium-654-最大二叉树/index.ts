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

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return case2(nums)
};

function case1(nums: number[]): TreeNode | null {
  const createNode = (left: number, right: number) => {
    if (left === right) return null

    let maxValue = -Infinity
    let maxValueIndex = 0

    for (let i = left; i < right; i++) {
      if (nums[i] > maxValue) {
        maxValue = nums[i]
        maxValueIndex = i
      }
    }

    return new TreeNode(maxValue, createNode(left, maxValueIndex), createNode(maxValueIndex + 1, right))
  }

  return createNode(0, nums.length)
};

function case2(nums: number[]): TreeNode | null {
  const length = nums.length
  if (length === 0) return null

  let maxValue = -Infinity
  let maxValueIndex = 0

  for (let i = 0; i < length; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i]
      maxValueIndex = i
    }
  }

  return new TreeNode(
    maxValue,
    case2(nums.slice(0, maxValueIndex)),
    case2(nums.slice(maxValueIndex + 1, length))
  )
}
