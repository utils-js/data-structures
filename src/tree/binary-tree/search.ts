import BinaryTreeNode, { egBinaryTree1 } from './binary-tree-node'

export function has<T>(node: BinaryTreeNode<T>, item: T): boolean {
  const queue = [node]
  while (queue.length) {
    const currentNode = queue.shift()
    if (currentNode?.data === item) {
      return true
    }
    if (currentNode?.leftNode) queue.push(currentNode.leftNode)
    if (currentNode?.rightNode) queue.push(currentNode.rightNode)
  }
  return false
}

console.log(has(egBinaryTree1, 15))
console.log(has(egBinaryTree1, 25))
