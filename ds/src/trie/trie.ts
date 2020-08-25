class TrieNode {
  keys = new Map<string, TrieNode>()
  private end = false

  setEnd() {
    this.end = true
  }

  isEnd() {
    return this.end
  }

  hasKey(key: string) {
    this.isValidKey(key)
    return this.keys.has(key)
  }

  setKey(key: string) {
    this.isValidKey(key)
    this.keys.set(key, new TrieNode())
  }

  getKey(key: string) {
    this.isValidKey(key)
    return this.keys.get(key)
  }

  private isValidKey(key: string) {
    if (key.length !== 1) {
      throw new Error(`Invalid Key. Key must be a character, Received "${key}"`)
    }
  }
}
export class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  add(input: string, node = this.root, startAt = 0): void {
    if (!node) return
    if (startAt === input.length) {
      node.setEnd()
      return
    }
    const key = input.charAt(startAt)
    if (!node.hasKey(key)) {
      node.setKey(key)
    }
    this.add(input, node.getKey(key), startAt + 1)
  }

  isWord(word: string, allowPrefix = false): boolean {
    let node: TrieNode | undefined = this.root
    for (let i = 0; i < word.length; i += 1) {
      const key = word.charAt(i)
      if (!node?.hasKey(key)) {
        return false
      } else {
        node = node.getKey(key)
      }
    }
    if (node && node.isEnd()) return true
    return allowPrefix
  }
}
