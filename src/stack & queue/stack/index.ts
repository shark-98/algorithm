export class Stack<T> {
  size: number;
  data: T[];
  top: number;

  constructor(_size: number) {
    this.size = _size;
    this.data = []
    this.top = -1
  }

  push(value: T): boolean {
    if (this.top + 1 === this.size) return false

    this.top++
    this.data[this.top] = value

    return true
  }

  pop(): boolean {
    if (this.empty()) return false

    this.data.pop()
    this.top--

    return true
  }

  empty(): boolean {
    return this.top === -1
  }

  getTop(): T | boolean {
    if (this.empty()) return false

    return this.data[this.top]
  }
}
