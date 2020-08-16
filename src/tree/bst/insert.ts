import { traverseInOrder, traverseLevelOrder2D } from '../binary-tree/traversal'
import BSTNode, { egBst1 } from './bst-node'

export function insert<T>(
  root: BSTNode<T> | null | undefined,
  item: T,
): BSTNode<T> {
  if (!root) {
    return new BSTNode<T>(item)
  }
  if (item <= root.data) {
    root.leftNode = insert(root.leftNode, item)
  } else {
    root.rightNode = insert(root.rightNode, item)
  }
  return root
}

const x = insert(egBst1, 140)
const y = insert(x, 85)
console.log(traverseLevelOrder2D(y))
console.log(traverseInOrder(y))
