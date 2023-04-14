export enum HeapType {
  Max,
  Min
}

export class priorityQueue {
  size: number;
  type: HeapType;
  count: number;
  private _data: number[];

  // data下标 从0开始 还是 从1开始:
  // 从0开始: 左子节点: 2 * i + 1、右子节点: 2 * i + 2
  // 从1开始: 左子节点: 2 * i、右子节点: 2 * i + 1
  // 选择从1开始，左子节点会少一步+1的运算
  private rootIndex: number = 1;

  constructor(_size: number, _type: HeapType = HeapType.Max) {
    this.size = _size;
    this.type = _type;
    this.count = 0;
    this._data = []
  }

  get data() {
    return this._data.slice(this.rootIndex, this.count + 1)
  }
  empty(): boolean {
    return this.count === 0
  }
  full(): boolean {
    return this.count === this.size
  }
  top() {
    return this.data[0]
  }
  private getFatherIndex(index: number) {
    return parseInt(String(index / 2))
  }
  private getLeftChildrenIndex(index: number) {
    return index * 2
  }
  private getRightChildrenIndex(index: number) {
    return index * 2 + 1
  }
  private swap(i1: number, i2: number) {
    const temp = this._data[i1]
    this._data[i1] = this._data[i2]
    this._data[i2] = temp
  }
  private isNext = (val: number, fVal: number) => {
    return (this.type === HeapType.Max && val > fVal) || (this.type === HeapType.Min && val < fVal)
  }
  private up_update(index: number) {
    let fIndex = this.getFatherIndex(index)

    while (fIndex >= this.rootIndex && this.isNext(this._data[index], this._data[fIndex])) {
      this.swap(index, fIndex)

      index = fIndex
      fIndex = this.getFatherIndex(index)
    }
  }
  push(val: number): boolean {
    if (this.full()) return false

    this.count += 1
    this._data[this.count] = val
    this.up_update(this.count)
    return true
  }
  private down_update(index: number) {
    let lIndex = this.getLeftChildrenIndex(index)

    while (lIndex <= this.count) {
      let pos = index

      if (this.isNext(this._data[lIndex], this._data[pos])) {
        pos = lIndex
      }

      let rIndex = this.getRightChildrenIndex(index)
      if (rIndex <= this.count && this.isNext(this._data[rIndex], this._data[pos])) {
        pos = rIndex
      }

      if (pos === index) break

      this.swap(index, pos)
      index = pos
      lIndex = this.getLeftChildrenIndex(index)
    }
  }
  pop(): boolean {
    if (this.empty()) return false

    const lastIndexVal = this._data[this.count]
    this._data[this.rootIndex] = lastIndexVal
    this.count -= 1
    this.down_update(this.rootIndex)
    return true
  }
}
