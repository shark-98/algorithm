export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  return case1(nums1, nums2)
};

function case1(nums1: number[], nums2: number[]): number {
  const m = nums1.length
  const n = nums2.length
  const length = m + n
  const mid = Math.floor((length - 1) / 2)
  const isEven = length % 2 === 0

  let i = 0, j = 0, k = 0, firstNum = 0, temp = 0
  while (i < m || j < n) {
    if (j >= n || (i < m && nums1[i] < nums2[j])) {
      temp = nums1[i]
      i++
    } else {
      temp = nums2[j]
      j++
    }

    if (firstNum) {
      return (firstNum + temp) / 2
    }
    if (k === mid) {
      firstNum = temp
      if (!isEven) {
        return firstNum
      }
    }
    k++
  }

  return 0
}
