class PriorityQueueNode<T> {
  public value: T
  public priority: number
  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }
}

export class PriorityQueue<T> {
  private heap: (PriorityQueueNode<T> | null | undefined)[] = [null]

  insert(value: T, priority: number) {
    const newNode = new PriorityQueueNode(value, priority)
    this.heap.push(newNode)

    let currentNodeIdx = this.heap.length - 1
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2)
    let currentNodeParent = this.heap[currentNodeParentIdx]

    while (currentNodeParent && newNode.priority > currentNodeParent.priority) {
      this.swapNodes(currentNodeParentIdx, currentNodeIdx)
      currentNodeIdx = currentNodeParentIdx
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2)
      currentNodeParent = this.heap[currentNodeParentIdx]
    }
  }

  remove() {
    if (this.heap.length <= 1) return null
    if (this.heap.length <= 3) return this.heap.pop()
    const toRemove = this.heap[1]
    this.heap[1] = this.heap.pop()
    let currentIdx = 1
    let currentChildIdx = this.getNextChildIdx(currentIdx)
    while (
      this.heap[currentChildIdx] &&
      this.hasMaxHeapProperty(currentChildIdx, currentIdx)
    ) {
      this.swapNodes(currentIdx, currentChildIdx)
      currentIdx = currentChildIdx
      currentChildIdx = this.getNextChildIdx(currentIdx)
    }
    return toRemove
  }

  private swapNodes(nodeOneIdx: number, nodeTwoIdx: number) {
    const temp = this.heap[nodeOneIdx]
    this.heap[nodeOneIdx] = this.heap[nodeTwoIdx]
    this.heap[nodeTwoIdx] = temp
  }

  private getNextChildIdx(parentIdx: number): number {
    const leftIdx = 2 * parentIdx
    const rightIdx = leftIdx + 1
    if (this.heap[leftIdx]) return leftIdx
    return this.hasMaxHeapProperty(rightIdx, leftIdx) ? rightIdx : leftIdx
  }

  private hasMaxHeapProperty(
    parentNodeIdx: number,
    childNodeIdx: number
  ): boolean {
    const parentNode = this.heap[parentNodeIdx]
    const childNode = this.heap[childNodeIdx]
    if (!parentNode) return false
    if (!childNode) return true
    return parentNode.priority >= childNode.priority
  }
}
