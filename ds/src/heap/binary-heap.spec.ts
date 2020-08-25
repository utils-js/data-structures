import { BinaryHeap, HeapType } from './binary-heap'

describe('binary Heap', () => {
  it('new heap size is 0', () => {
    expect.assertions(2)
    const maxHeap = new BinaryHeap(HeapType.MAX_HEAP)
    const minHeap = new BinaryHeap(HeapType.MIN_HEAP)

    expect(maxHeap.size).toBe(0)
    expect(minHeap.size).toBe(0)
  })

  it('size should increase after inserting', () => {
    expect.hasAssertions()
    const maxHeap = new BinaryHeap(HeapType.MAX_HEAP)
    const minHeap = new BinaryHeap(HeapType.MIN_HEAP)

    expect(maxHeap.size).toBe(0)
    expect(minHeap.size).toBe(0)
    maxHeap.insert(1)
    minHeap.insert(1)
    expect(maxHeap.size).toBe(1)
    expect(minHeap.size).toBe(1)
    maxHeap.insert(2)
    maxHeap.insert(3)
    minHeap.insert(2)
    minHeap.insert(3)
    expect(maxHeap.size).toBe(3)
    expect(minHeap.size).toBe(3)
  })

  it('peek should give the max value for Max Heap', () => {
    expect.hasAssertions()
    const maxHeap = new BinaryHeap(HeapType.MAX_HEAP)
    maxHeap.insert(13)
    maxHeap.insert(1)
    maxHeap.insert(2)
    maxHeap.insert(9)
    maxHeap.insert(4)
    expect(maxHeap.peek()).toBe(9)
  })
  it('peek should give the min value for Min Heap', () => {
    expect.hasAssertions()
    const minHeap = new BinaryHeap(HeapType.MIN_HEAP)
    minHeap.insert(3)
    minHeap.insert(1)
    minHeap.insert(2)
    minHeap.insert(9)
    minHeap.insert(4)
    expect(minHeap.peek()).toBe(1)
  })
})
