export class Iterator {
  data: any
  index: number

  constructor(arr: any[]) {
    this.data = arr
    this.index = -1
  }

  hasNext(): boolean {
    return this.index < this.data.length - 1
  }

  next(): number {
    if (this.hasNext()) {
      this.index++
    }

    return this.data[this.index]
  }
}

export class PeekingIterator {
  iterator: Iterator
  nextElement: number | null

  constructor(iterator: Iterator) {
    this.iterator = iterator
    this.nextElement = this.iterator.next()
  }

  peek(): number {
    return this.nextElement as number
  }

  next(): number {
    const ret = this.nextElement
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null
    return ret as number
  }

  hasNext(): boolean {
    return this.nextElement !== null
  }
}
