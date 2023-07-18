export function checkValidString(s: string): boolean {
  return case1(s)
};

function case1(s: string): boolean {
  const stack: string[] = []

  const isLeft = (c: string) => c === '('
  const isRight = (c: string) => c === ')'
  const isAll = (c: string) => c === '*'

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isLeft(c) || isAll(c)) {
      stack.push(c)
    } else if (isRight(c)) {
      let index = -1
      for (let j = stack.length - 1; j >= 0; j--) {
        const item = stack[j];
        if (isLeft(item)) {
          index = j
          break
        }
      }
      if (index !== -1) {
        stack.splice(index, 1)
      } else {
        index = -1
        for (let j = stack.length - 1; j >= 0; j--) {
          const item = stack[j];
          if (isAll(item)) {
            index = j
            break
          }
        }

        if (index !== -1) {
          stack.splice(index, 1)
        } else {
          return false
        }
      }
    }
  }

  const stackNew: string[] = []
  for (let i = 0; i < stack.length; i++) {
    const c = stack[i];
    if (isLeft(c)) {
      stackNew.push(c)
    } else {
      if (stackNew.length) {
        stackNew.pop()
      }
    }
  }

  const index = stackNew.findIndex(item => isLeft(item))

  return index === -1
};
