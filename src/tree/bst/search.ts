import { traverseInOrder } from '../binary-tree/traversal'
import BSTNode, { egBst1 } from './bst-node'

export function findMinBST<T>(root?: BSTNode<T>): undefined | BSTNode<T> {
  if (!root) return undefined
  if (!root.leftNode) return root
  return findMinBST(root.leftNode)
}

export function searchBST<T>(
  root: BSTNode<T> | undefined | null,
  item: T,
): boolean {
  if (!root) return false
  if (root.data === item) return true
  return searchBST(item < root.data ? root.leftNode : root.rightNode, item)
}
function test(testNow = false) {
  if (!testNow) return
  console.log(searchBST(egBst1, 90))
  console.log(searchBST(egBst1, 91))
  console.log(traverseInOrder(egBst1))
}
test()
