export function intersection(nums1: number[], nums2: number[]): number[] {
  return case1(nums1, nums2)
};

function case1(nums1: number[], nums2: number[]): number[] {
  let a: number[], b: number[]
  if (nums1.length > nums2.length) {
    a = nums2
    b = nums1
  } else {
    a = nums1
    b = nums2
  }

  const hash1 = a.reduce((total, cur) => {
    if (!total[cur]) {
      total[cur] = true
    }
    return total
  }, {})

  const set = new Set<number>()
  for (let i = 0, len = b.length; i < len; i++) {
    const val = b[i]
    if (hash1[val]) set.add(b[i])
  }

  return [...set]
};
