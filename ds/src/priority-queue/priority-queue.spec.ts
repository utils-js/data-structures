import { PriorityQueue } from './priority-queue'

describe('test Priority Queue', () => {
  it('empty  Queue should remove null', () => {
    expect.hasAssertions()
    const queue = new PriorityQueue()
    expect(queue.remove()).toBeNull()
  })
})
