import { traverseLevelOrder2D } from '../binary-tree/traversal'
import BSTNode, { egBst1 } from './bst-node'
import { findMinBST } from './search'

export function deleteNode<T>(
  root: BSTNode<T> | undefined,
  item: T,
): undefined | BSTNode<T> {
  if (!root) return undefined
  if (item < root.data) {
    root.leftNode = deleteNode(root.leftNode, item)
  } else if (item > root.data) {
    root.rightNode = deleteNode(root.rightNode, item)
  } else if (root.leftNode && root.rightNode) {
    const min = findMinBST(root.rightNode)
    if (min) {
      root.data = min.data
      deleteNode(root.rightNode, min.data)
    }
  } else if (root.leftNode) {
    return root.leftNode
  } else if (root.rightNode) {
    return root.rightNode
  } else {
    return undefined
  }
  return root
}

console.log(traverseLevelOrder2D(egBst1))
const deleted = deleteNode(egBst1, 90)
if (deleted) console.log(traverseLevelOrder2D(deleted))
