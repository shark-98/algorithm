// 维护一个最大节点数为k的小顶堆
export class KthLargest {
  k: number
  _data: number[] = [-1]

  constructor(k: number, nums: number[]) {
    this.k = k

    for (let i = 0; i < nums.length; i++) {
      this.add(nums[i])
    }
  }

  get data() {
    return this._data.slice(1)
  }

  add(val: number): number {
    const len = this._data.length
    if (len - 1 < this.k) {
      this._data[len] = val
      this.up_update(len)
    } else {
      if (val > this.data[0]) {
        this.swap(1, this.k)
        this._data.splice(this.k, 1)
        this.down_update(1)

        this._data[this.k] = val
        this.up_update(this.k)
      }
    }

    return this.data[0]
  }

  private getFatherIndex(i: number): number {
    return parseInt(`${i / 2}`)
  }
  private getLeftIndex(i: number): number {
    return i * 2
  }
  private getRightIndex(i: number): number {
    return i * 2 + 1
  }
  private swap(i1: number, i2: number) {
    const temp = this._data[i1]
    this._data[i1] = this._data[i2]
    this._data[i2] = temp
  }
  private up_update(i: number) {
    let cIndex = i
    let fIndex = this.getFatherIndex(cIndex)

    while (fIndex > 0 && (this._data[cIndex] <= this._data[fIndex])) {
      this.swap(cIndex, fIndex)

      cIndex = fIndex
      fIndex = this.getFatherIndex(cIndex)
    }
  }

  private down_update(i: number) {
    let left = this.getLeftIndex(i)
    let right: number

    while (left <= this.k) {
      let pos = i
      if (this._data[left] < this._data[pos]) pos = left

      right = this.getRightIndex(i)
      if (right <= this.k && this._data[right] < this._data[pos]) pos = right

      if (pos === i) break

      this.swap(i, pos)

      i = pos
      left = this.getLeftIndex(i)
    }
  }
}

export class KthLargest1 {
  k: number
  data: number[]

  constructor(k: number, nums: number[]) {
    this.k = k

    this.data = nums
    this.sort()
  }

  add(val: number): number {
    this.data.push(val)
    this.sort()

    return this.data[this.k - 1]
  }

  private sort() {
    this.data.sort((a, b) => b - a)
  }
}

export class KthLargest2 {
  k: number
  data: number[] = []

  constructor(k: number, nums: number[]) {
    this.k = k

    for (let i = 0; i < nums.length; i++) {
      this.add(nums[i])
    }
  }

  add(val: number): number {
    if (this.data.length < this.k) {
      this.data.push(val)
      this.sort()
    } else {
      if (val > this.data[0]) {
        this.data[0] = val
        this.sort()
      }
    }

    return this.data[0]
  }

  private sort() {
    this.data.sort((a, b) => a - b)
  }
}
