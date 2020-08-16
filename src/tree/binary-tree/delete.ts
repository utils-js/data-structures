import BinaryTreeNode, { egBinaryTree1 } from './binary-tree-node'
import { traverseLevelOrder2D } from './traversal'

export function removeSubTree<T>(root: BinaryTreeNode<T>, nodeData: T) {
  const queue = [root]
  const processChild = (node?: BinaryTreeNode<T>): boolean => {
    if (!node) return true
    if (node.data === nodeData) {
      return false
    }
    queue.push(node)
    return true
  }
  while (queue.length) {
    const node = queue.shift()
    if (!node) return
    if (!processChild(node.leftNode)) {
      node.leftNode = undefined
      break
    }
    if (!processChild(node.rightNode)) {
      node.rightNode = undefined
      break
    }
  }
}

export function deleteNode<T>(root: BinaryTreeNode<T>, item: T): boolean {
  const queue = [root]
  let nodeToFix: BinaryTreeNode<T> | null = null
  let lastNode: BinaryTreeNode<T> | null = null
  let lastParent: BinaryTreeNode<T> | null = null
  while (queue.length) {
    const node = queue.shift()
    if (!node) return false
    if (node.leftNode || node.rightNode) lastParent = node
    if (node.leftNode) queue.push(node.leftNode)
    if (node.rightNode) queue.push(node.rightNode)
    lastNode = node
    if (node.data === item) {
      nodeToFix = node
    }
  }
  if (nodeToFix && lastNode && lastParent) {
    // removeSubTree(root, lastNode.data)
    if (lastParent.rightNode) {
      lastParent.rightNode = undefined
    } else {
      lastParent.leftNode = undefined
    }
    nodeToFix.data = lastNode.data
    return true
  }
  return false
}

console.log(deleteNode(egBinaryTree1, 222))
console.log(traverseLevelOrder2D(egBinaryTree1))
