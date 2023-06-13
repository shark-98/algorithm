export function solveEquation(equation: string): string {
  return case1(equation)
};

function case1(equation: string): string {
  const isUpdateSign = (char: string) => {
    return ['=', '+', '-'].includes(char)
  }
  const getNumber = (a: number, b: number, c: number) => {
    return a * b * c
  }
  const len = equation.length
  let i = 0
  let signGlobal = 1 // 1：正号；-1：负号
  let sign = 1 // 1：正号；-1：负号
  let constant = 0 // 常数
  let coefficient = 0 // 系数
  let str = ''

  while (i < len) {
    const char = equation[i]

    if (isUpdateSign(char)) {
      if (char === '=') {
        signGlobal = -1
        sign = 1
      } else {
        sign = char === '+' ? 1 : -1
      }
      i++
      continue
    }

    while (i < len && !isUpdateSign(equation[i])) {
      str += equation[i]
      i++
    }
    if (str[str.length - 1] === 'x') {
      const base = str.length === 1 ? 1 : Number(str.slice(0, str.length - 1))
      coefficient += getNumber(signGlobal, sign, base)
    } else {
      const base = Number(str)
      constant += getNumber(signGlobal, sign, base)
    }
    str = ''
  }

  if (coefficient === 0) {
    return constant === 0 ? "Infinite solutions" : 'No solution'
  }

  return `x=${-(constant / coefficient)}`
}
