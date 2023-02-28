export class SeqList {
  public size: number
  public count: number = 0
  public data: Array<unknown> = []

  constructor(_size: number) {
    this.size = _size
  }

  insert(pos: number, value: unknown): boolean {
    if (pos < 0 || pos > this.count) {
      return false
    }

    for (let i = this.count; i > pos; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[pos] = value
    this.count++

    return true
  }

  remove(pos: number): boolean {
    if (pos < 0 || pos >= this.count) {
      return false
    }

    for (let i = pos + 1; i < this.count; i++) {
      this.data[i - 1] = this.data[i]
    }

    this.data.pop()
    this.count--

    return true
  }
}
