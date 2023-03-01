export type NextType = null | LinkList

export class LinkList {
  val: unknown;
  next: NextType;

  constructor(val: unknown) {
    this.val = val;
    this.next = null
  }

  insert(pos: number, val: unknown): NextType {
    if (pos < 0) {
      return null
    }

    let q: LinkList = this

    if (pos === 0) {
      const c = new LinkList(q.val)
      c.next = q.next
      q.val = val
      q.next = c
      return q
    }

    for (let i = 1; i < pos; i++) {
      if (q.next) {
        q = q.next
      } else {
        return null
      }
    }

    const c = new LinkList(val)
    c.next = q.next
    q.next = c

    return this
  }

  remove(pos: number): boolean {
    if (pos < 0) {
      return false
    }

    let q: NextType = this
    if (pos === 0) {
      const n = q.next
      if (n) {
        q.val = n.val
        q.next = n.next
      } else {
        q = null
      }
      return true
    }

    for (let i = 1; i < pos; i++) {
      if (q.next) {
        q = q.next
      } else {
        return false
      }
    }

    q.next = q.next ? q.next.next : null

    return true
  }

  find(val: unknown): NextType {
    let p: NextType = this

    while(p) {
      if (p.val === val) {
        return p
      }
      p = p.next
    }

    return null
  }
}
