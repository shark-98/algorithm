export function fn(s: string): number {
  return case1(s)
}

function case1(s: string, l: number = 0, r: number = s.length): number {
  const LONG_NUM = Math.pow(2, 50)
  let priority = LONG_NUM - 1
  let curPriority = 0
  let temPriority = 0
  let pos = -1
  IS_CONSOLE && console.log('当前字符：', s.substring(l, r));

  // 找到当前优先级最低的运算符
  for (let i = l; i < r; i++) {
    curPriority = LONG_NUM
    switch (s[i]) {
      case '(':
        temPriority += 100;
        break;
      case ')':
        temPriority -= 100;
        break;

      case '+':
      case '-':
        curPriority = 1 + temPriority;
        break;

      case '*':
      case '/':
        curPriority = 2 + temPriority;
        break;

      case '^':
        curPriority = 3 + temPriority;
        break;

      default:
        break;
    }

    if (['+', '-'].includes(s[i]) && (i === 0 || (i > 0 && ['(', '+', '-', '*', '/'].includes(s[i - 1])))) {
      curPriority += 1000
    }

    if (curPriority <= priority) {
      priority = curPriority;
      pos = i
    }
  }

  // 未找到运算符
  if (pos === -1) {
    let num = 0
    for (let i = l; i < r; i++) {
      if (s[i] < '0' || s[i] > '9') continue;

      num = num * 10 + Number(s[i])
    }
    IS_CONSOLE && console.log('未找到最小运算符，当前为数字：', num);

    return num
  } else {
    IS_CONSOLE && console.log('找到最小运算符：', s[pos]);
    for (let i = l; i < r; i++) {
      const left = case1(s, i, pos)
      const right = case1(s, pos + 1, r)
      IS_CONSOLE && console.log('最小运算符：', s[pos], '左值：', left, '右值：', right);
      switch (s[pos]) {
        case '+':
          return left + right
        case '-':
          return left - right
        case '*':
          return left * right
        case '/':
          return left / right
        case '^':
          return Math.pow(left, right)
        default:
          break;
      }
    }

    return -1
  }
}

const IS_CONSOLE = false
