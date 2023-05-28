export function sampleStats(count: number[]): number[] {
  return case1(count)
};

function case1(count: number[]): number[] {
  const numberList: any[] = []

  let sum = 0
  let allCount = 0
  let modeValue = 0
  let mode = 0

  for (let i = 0; i < count.length; i++) {
    const amount = count[i]

    if (amount !== 0) {
      sum += amount * i
      allCount += amount

      if (amount > modeValue) {
        modeValue = amount
        mode = i
      }

      numberList.push({ value: i, amount })
    }
  }

  let median = 0
  let midIndex = Math.ceil(allCount / 2)
  const numberListLength = numberList.length
  const isEven = allCount % 2 === 0

  for (let i = 0; i < numberListLength; i++) {
    const { value, amount } = numberList[i]

    midIndex -= amount

    if (midIndex <= 0) {
      median = value
      if (isEven && midIndex === 0) {
        median = Number(((value + numberList[i + 1].value) / 2).toFixed(5))
      }

      break
    }
  }

  return [numberList[0].value, numberList[numberListLength - 1].value, Number((sum / allCount).toFixed(5)), median, mode]
};
