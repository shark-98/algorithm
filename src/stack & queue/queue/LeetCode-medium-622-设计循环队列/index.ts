class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export class MyCircularQueue {
  size: number;
  count: number;
  head: ListNode;
  tail: ListNode;

  constructor(k: number) {
    this.size = k
    this.count = 0

    this.head = new ListNode()
    this.tail = this.head
    for (let i = 0; i < k; i++) {
      this.tail.next = new ListNode()
      this.tail = this.tail.next
    }
    this.tail.next = this.head
  }

  get data() {
    const arr: number[] = []
    let p: ListNode | null = this.head
    while (p) {
      arr.push(p.val)
      if (p === this.tail) {
        return arr
      }
      p = p?.next || null
    }
    return arr
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }

    this.tail = this.tail.next!
    this.tail.val = value
    this.count++
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }

    this.head = this.head.next!
    this.count--
    return true
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    }

    return this.head.val
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }

    return this.tail.val
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  isFull(): boolean {
    return this.count === this.size
  }
}

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/
