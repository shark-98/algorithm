export function longestPalindrome(s: string): string {
  return case1(s)
};

const case1 = (s: string): string => {
  const len = s.length
  let maxStr = ''

  const getMaxStr = (left: number, right: number) => {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--
      right++
    }

    const newStr = s.slice(left + 1, right)
    if (newStr.length > maxStr.length) maxStr = newStr
  }

  for (let i = 0; i < len; i++) {
    getMaxStr(i, i)
    getMaxStr(i, i + 1)
  }

  return maxStr
}
