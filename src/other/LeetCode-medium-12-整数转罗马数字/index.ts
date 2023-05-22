export function intToRoman(num: number): string {
  return case2(num)
};

const case1 = (num: number): string => {
  const hash = {
    '1': 'I',
    '5': 'V',
    '10': 'X',
    '50': 'L',
    '100': 'C',
    '500': 'D',
    '1000': 'M'
  }

  const s = num.toString()
  let r = ''

  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i];

    let zero = ''
    for (let j = 0; j < len - i - 1; j++) {
      zero += '0'
    }

    const c = `${char}${zero}`

    if (hash[c]) {
      r += hash[c]
    } else {
      const baseOne = hash[`1${zero}`]
      const baseFive = hash[`5${zero}`]

      if ('1' < char && char <= '3') {
        for (let j = 0, l = Number(char); j < l; j++) {
          r += baseOne
        }
      } else if (char === '4') {
        r += `${baseOne}${baseFive}`
      } else if ('6' <= char && char <= '8') {
        r += baseFive
        for (let j = 0, l = Number(char) - 5; j < l; j++) {
          r += baseOne
        }
      } else if (char === '9') {
        r += `${baseOne}${hash[`1${zero}0`]}`
      }
    }
  }

  return r
}

const case2 = (num: number): string => {
  const hash: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  let r = ''
  let cur: [number, string] = [] = [0, '']

  for (let i = 0, len = hash.length; i < len; i++) {
    cur = hash[i]

    while (num >= cur[0]) {
      r += cur[1]
      num -= cur[0]
    }
  }

  return r
}
