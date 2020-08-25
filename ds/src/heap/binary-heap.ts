export enum HeapType {
  MIN_HEAP = 'MIN_HEAP',
  MAX_HEAP = 'MAX_HEAP',
}
export class BinaryHeap<T> {
  private readonly tree: Array<T | null> = []
  private readonly heapType: HeapType
  private lastItemIdx: number = 0

  constructor(heapType: HeapType) {
    this.heapType = heapType
  }

  insert(value: T) {
    this.lastItemIdx += 1
    this.tree[this.lastItemIdx] = value
    this.heapifyBottomToTop()
  }

  pop(): T | null {
    if (this.lastItemIdx >= 1) {
      const value = this.tree[1]
      this.tree[1] = this.tree[this.lastItemIdx]
      this.tree[this.lastItemIdx] = null
      this.lastItemIdx -= 1
      this.heapifyTopToBottom()
      return value
    }
    return null
  }

  peek(): T | null {
    return this.lastItemIdx >= 1 ? this.tree[1] : null
  }

  get size(): number {
    return this.lastItemIdx
  }

  private heapifyTopToBottom() {
    if (this.lastItemIdx < 1) return
    let startIdx = 1
    while (startIdx <= this.lastItemIdx) {
      const parent = this.tree[startIdx]
      const child1 = this.tree[2 * startIdx]
      const child2 = this.tree[2 * startIdx + 1]
      if (this.comparator(parent, child1) && this.comparator(parent, child2)) {
        break
      } else if (
        !this.comparator(parent, child1) &&
        !this.comparator(parent, child2)
      ) {
        if (this.comparator(child1, child2)) {
          startIdx = this.swapItem(startIdx, 2 * startIdx)
        } else {
          startIdx = this.swapItem(startIdx, 2 * startIdx + 1)
        }
      } else if (!this.comparator(parent, child1)) {
        startIdx = this.swapItem(startIdx, 2 * startIdx)
      } else if (!this.comparator(parent, child2)) {
        startIdx = this.swapItem(startIdx, 2 * startIdx + 1)
      }
    }
  }

  private heapifyBottomToTop() {
    let startIdx = this.lastItemIdx
    while (startIdx > 1) {
      const parentIdx = Math.floor(startIdx / 2)
      if (this.comparator(this.tree[parentIdx], this.tree[startIdx])) {
        break
      } else {
        startIdx = this.swapItem(startIdx, parentIdx)
      }
    }
  }

  private swapItem(from: number, to: number): number {
    const temp = this.tree[from]
    this.tree[from] = this.tree[to]
    this.tree[to] = temp
    console.log('Changed: ', this.tree[from], '   ', this.tree[to])
    return to
  }

  private comparator(parent: T | null, child: T | null): boolean {
    if (child === null || child === undefined) return true
    if (parent === null || parent === undefined) return false
    switch (this.heapType) {
      case HeapType.MAX_HEAP:
        return parent >= child
      case HeapType.MIN_HEAP:
        return parent <= child
    }
  }
}
