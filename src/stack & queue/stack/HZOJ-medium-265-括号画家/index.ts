export function fn(s: string): number {
  return case1(s)
}

const hash = {
  ')': '(',
  '}': '{',
  ']': '[',
}
const left = Object.values(hash)
const right = Object.keys(hash)

function case1(s: string): number {
  let stack: string[] = []
  let max = 0
  let cur = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (left.includes(char)) {
      stack.push(char)
    } else if (right.includes(char)) {
      if (stack.length && hash[char] === stack[stack.length - 1]) {
        cur += 2
        stack.pop()
      } else {
        max = cur > max ? cur : max
        stack = []
        cur = 0
      }
    }
  }

  return cur > max ? cur : max
}
