export class SeatManager {
  private data: boolean[]
  size: number = 0
  activeIndex: number = 1

  constructor(n: number) {
    this.size = n + 1
    this.data = new Array(this.size)
  }

  get list() {
    return this.data.map((item, i) => item && i).filter(i => i)
  }

  getActiveIndex() {
    for (let i = this.activeIndex; i < this.size; i++) {
      if (!this.data[i]) {
        this.activeIndex = i
        break
      }
    }
  }

  reserve(): number {
    let i = this.activeIndex
    this.data[i] = true
    this.getActiveIndex()
    return i
  }

  unreserve(seatNumber: number): void {
    this.data[seatNumber] = false
    if (seatNumber > this.activeIndex) {
      this.getActiveIndex()
    } else {
      this.activeIndex = seatNumber
    }
  }
}
