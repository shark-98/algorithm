export function isItPossible(word1: string, word2: string): boolean {
  return case1(word1, word2)
}

function case1(word1: string, word2: string): boolean {
  const hash1 = {}
  for (const item of word1) {
    hash1[item] = (hash1[item] || 0) + 1
  }

  const hash2 = {}
  for (const item of word2) {
    hash2[item] = (hash2[item] || 0) + 1
  }

  const arr1 = Object.keys(hash1)
  const arr2 = Object.keys(hash2)
  const len1 = arr1.length
  const len2 = arr2.length

  if (Math.abs(len1 - len2) > 2) return false

  for (const key1 of arr1) {
    for (const key2 of arr2) {
      if (key1 === key2) {
        if (len1 === len2) return true
      } else {
        const count1 = len1 - (hash1[key1] > 1 ? 0 : 1) + (hash1[key2] === undefined ? 1 : 0)
        const count2 = len2 - (hash2[key2] > 1 ? 0 : 1) + (hash2[key1] === undefined ? 1 : 0)
        if (count1 === count2) return true
      }
    }
  }

  return false
};
