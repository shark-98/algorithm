export function isValid(s: string): boolean {
  return case1(s)
};

const hash = {
  ')': '(',
  '}': '{',
  ']': '[',
}
const left = Object.values(hash)
const right = Object.keys(hash)

function case1(s: string): boolean {
  const stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (left.includes(char)) {
      stack.push(char) // left入栈
    } else if (right.includes(char) && stack.pop() !== hash[char]) {
      // 栈顶的left出栈
      return false // 当前right对应的left与栈顶的left不相等 - 无效括号
    }
  }

  return stack.length === 0 // 栈中是否有值: 有值 - false; 无值 - true
}
