export function validateStackSequences(pushed: number[], popped: number[]): boolean {
  return case2(pushed, popped)
};

function case1(pushed: number[], popped: number[]): boolean {
  const stack: number[] = []

  const len = pushed.length
  let i = 0
  while (popped.length) {
    const curTop = stack[stack.length - 1]
    const curItem = popped[0]

    if (curTop === curItem) {
      stack.pop()
      popped.shift()
    } else {
      if (i < len) {
        stack.push(pushed[i])
        i++
      } else {
        return false
      }
    }
  }

  return true
};

function case2(pushed: number[], popped: number[]): boolean {
  const stack: number[] = []
  let j = 0

  for (let i = 0; i < popped.length; i++) {
    const curPoppedItem = popped[i];
    const stackLen = stack.length
    const pushedLen = pushed.length

    if (!stackLen || stack[stackLen - 1] !== curPoppedItem) {
      while (j < pushedLen && pushed[j] !== curPoppedItem) {
        stack.push(pushed[j])
        j++
      }

      if (j === pushedLen) return false

      stack.push(pushed[j])
      j++
    }

    stack.pop()
  }

  return true
}
