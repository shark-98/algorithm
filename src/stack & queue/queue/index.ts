export class Queue<T> {
  size: number;
  count: number;
  head: number;
  tail: number;
  data: T[];

  constructor(_size: number) {
    this.size = _size;
    this.head = this.tail = this.count = 0;
    this.data = []
  }

  push(value: T): boolean {
    if (this.count === this.size) return false

    this.data[this.tail] = value
    this.tail++
    this.count++

    return true
  }

  pop(): boolean {
    if (this.empty()) return false

    this.data.shift()
    this.tail--
    this.count--

    return true
  }

  empty(): boolean {
    return this.count === 0
  }

  front(): T | boolean {
    if (this.empty()) return false
    return this.data[this.head]
  }
}
