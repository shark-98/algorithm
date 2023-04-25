/**
 * 排序规则
 */
export enum SortRule {
  /** 升序 */
  ASC = 'asc',
  /** 降序 */
  DESC = 'desc',
}

/**
 * 是否符合排序规则
 */
export const checkQualified = (a: number, b: number, rule: SortRule): boolean => {
  return rule === SortRule.ASC ? a < b
    : rule === SortRule.DESC ? a > b
      : false
};

/**
 * 排序函数返回值类型
 */
export type ReturnT = {
  /** 数据源 */
  arr: number[],
  /** 循环次数 */
  count?: number,
  /** 交换次数 */
  exchangeCount?: number,
}

/**
 * 校验数组是否有序
 */
export const checkOrderedSequence = (arr: number[], rule: SortRule): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (checkQualified(arr[i + 1], arr[i], rule)) {
      return false
    }
  }

  return true
};
