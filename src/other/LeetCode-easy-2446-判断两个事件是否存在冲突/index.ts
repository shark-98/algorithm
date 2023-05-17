export function haveConflict(event1: string[], event2: string[]): boolean {
  return case2(event1, event2)
};

function case1(event1: string[], event2: string[]): boolean {
  const getTime = (str: string) => {
    const [hour, minute] = str.split(':') || []
    return Number(hour) * 60 + Number(minute)
  }
  const getTimeRange = (arr: string[]) => {
    const [start, end] = arr || []
    return [getTime(start), getTime(end)]
  }

  const [startTime1, endTime1] = getTimeRange(event1)
  const [startTime2, endTime2] = getTimeRange(event2)

  return !(startTime2 > endTime1 || endTime2 < startTime1)
};

function case2(event1: string[], event2: string[]): boolean {
  if (event2[0] > event1[1] || event2[1] < event1[0]) return false
  return true
}
