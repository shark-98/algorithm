export function backspaceCompare(s: string, t: string): boolean {
  return case1(s, t)
};

function case1(s: string, t: string): boolean {
  function getResultString(s: string): string[] {
    const arr: string[] = []
    const REMOVE_CHAR = '#'

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char === REMOVE_CHAR) {
        if (arr.length) {
          arr.pop()
        }
      } else {
        arr.push(char)
      }
    }

    return arr
  }

  const arrS = getResultString(s)
  const arrT = getResultString(t)

  if (arrS.length !== arrT.length) {
    return false
  }

  while(arrS.length) {
    if (arrS[arrS.length - 1] !== arrT[arrT.length - 1]) {
      return false
    }

    arrS.pop()
    arrT.pop()
  }

  return true
}
