import { Trie } from './trie'

describe('test trie', () => {
  it('empty trie', () => {
    expect.hasAssertions()
    const trie = new Trie()

    expect(trie.isWord('a')).toBe(false)
    // expect(trie.isWord('')).toBe(true) // what should be this?
  })

  it('isWord after adding words', () => {
    expect.hasAssertions()
    const trie = new Trie()
    trie.add('Hello')
    trie.add('World')
    trie.add('Cool')
    trie.add('bat')
    trie.add('batman')
    expect(trie.isWord('Hello')).toBe(true)
    expect(trie.isWord('Help')).toBe(false)
    expect(trie.isWord('Hell')).toBe(false)
  })

  it('isPrefix after adding words', () => {
    expect.hasAssertions()
    const trie = new Trie()
    trie.add('Hello')
    trie.add('World')
    trie.add('Cool')
    trie.add('bat')
    trie.add('batman')

    expect(trie.isWord('Hell', true)).toBe(true)
    expect(trie.isWord('batma', true)).toBe(true)
    expect(trie.isWord('batmo', true)).toBe(false)
    expect(trie.isWord('Help', true)).toBe(false)
  })
})
