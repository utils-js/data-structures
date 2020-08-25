import { mergeSort } from './merge-sort'

describe('merge Sort', () => {
  it('sort empty array', () => {
    expect.hasAssertions()
    const arr: number[] = []
    const sorted = mergeSort(arr)
    expect(sorted).toHaveLength(0)
  })
})
