export function largestValsFromLabels(values: number[], labels: number[], numWanted: number, useLimit: number): number {
  return case1(values, labels, numWanted, useLimit)
};

function case1(values: number[], labels: number[], numWanted: number, useLimit: number): number {
  const length = values.length

  const arr: { value: number, label: number }[] = []
  for (let i = 0; i < length; i++) {
    arr[i] = { value: values[i], label: labels[i] }
  }
  arr.sort((a, b) => b.value - a.value)

  const labelHash = {}
  let len = 0, r = 0

  for (let i = 0; i < length; i++) {
    if (len === numWanted) break

    const { value, label } = arr[i]

    if (labelHash[label] === useLimit) continue

    r += value
    len += 1
    labelHash[label] = (labelHash[label] || 0) + 1
  }

  return r
}
