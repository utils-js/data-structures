import BinaryTreeNode, { egBinaryTree1 } from './binary-tree-node'
import { traverseInOrder, traverseLevelOrder2D } from './traversal'

/**
 * First vacant child is the first (left, right)
 * in a level order traversal
 */
export function insertAtFirstVacantChild<T>(node: BinaryTreeNode<T>, child: BinaryTreeNode<T>): BinaryTreeNode<T> {
  const queue = [node]
  while (queue.length) {
    const activeNode = queue.shift()
    if (!activeNode) break
    if (!activeNode.leftNode) {
      activeNode.leftNode = child
      break
    } else {
      queue.push(activeNode.leftNode)
    }
    if (!activeNode.rightNode) {
      activeNode.rightNode = child
      break
    } else {
      queue.push(activeNode.rightNode)
    }
  }
  return node
}

const modified = insertAtFirstVacantChild(egBinaryTree1, new BinaryTreeNode<number>(223))
console.log(traverseLevelOrder2D(modified))
console.log(traverseInOrder(modified))
