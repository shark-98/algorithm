/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  return case3(nums1, m, nums2, n)
};

function case1(nums1: number[], m: number, nums2: number[], n: number): void {
  let addCount = 0
  for (let i = 0; i < n; i++) {
    const a = nums2[i]

    for (let j = 0; j < nums1.length; j++) {
      const b = nums1[j]
      if (a < b || j >= m + addCount) {
        addCount++
        let k = j
        let temp = nums1[k]
        while (k < nums1.length - 1) {
          const x = nums1[k + 1]
          nums1[k + 1] = temp
          temp = x
          k++
        }
        nums1[j] = a
        break
      }
    }
  }
};

function case2(nums1: number[], m: number, nums2: number[], n: number): void {
  const len = m + n
  const arr = new Array(len)

  let i = 0, j = 0, k = 0
  while (i < m || j < n) {
    if (j >= n || (i < m && nums1[i] < nums2[j])) {
      arr[k++] = nums1[i]
      i++
    } else {
      arr[k++] = nums2[j]
      j++
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = arr[i]
  }
};

// 归并排序-从后向前
function case3(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1, j = n - 1, k = m + n - 1

  while (i !== -1 || j !== -1) {
    if (j === -1 || (i !== -1 && nums1[i] > nums2[j])) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
}
