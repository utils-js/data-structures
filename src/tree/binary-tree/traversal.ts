import BinaryTreeNode, { egBinaryTree1 } from './binary-tree-node'

export function traversePreOrder<T>(node?: BinaryTreeNode<T>, arr: T[] = []): T[] {
  if (node) {
    arr.push(node.data)
    traversePreOrder(node.leftNode, arr)
    traversePreOrder(node.rightNode, arr)
  }
  return arr
}

export function traverseInOrder<T>(node?: BinaryTreeNode<T>, arr: T[] = []): T[] {
  if (node) {
    traverseInOrder(node.leftNode, arr)
    arr.push(node.data)
    traverseInOrder(node.rightNode, arr)
  }
  return arr
}

export function traversePostOrder<T>(node?: BinaryTreeNode<T>, arr: T[] = []): T[] {
  if (node) {
    traversePostOrder(node.leftNode, arr)
    traversePostOrder(node.rightNode, arr)
    arr.push(node.data)
  }
  return arr
}

export function traverseLevelOrder<T>(node?: BinaryTreeNode<T>, arr: T[] = []): T[] {
  if (node) {
    const queue = [node]
    while (queue.length) {
      const activeNode = queue.shift()
      if (activeNode?.leftNode) {
        queue.push(activeNode.leftNode)
      }
      if (activeNode?.rightNode) {
        queue.push(activeNode.rightNode)
      }
      if (activeNode) {
        arr.push(activeNode.data)
      }
    }
  }
  return arr
}

export function traverseLevelOrder2D<T>(node: BinaryTreeNode<T>, arr: T[][] = []): T[][] {
  let activeLevel: BinaryTreeNode<T>[] = [node]
  while (activeLevel.length) {
    const nextLevel: BinaryTreeNode<T>[] = []
    const currArr: T[] = []
    while (activeLevel.length) {
      const activeNode = activeLevel.shift()
      if (activeNode?.leftNode) {
        nextLevel.push(activeNode.leftNode)
      }
      if (activeNode?.rightNode) {
        nextLevel.push(activeNode.rightNode)
      }
      if (activeNode) {
        currArr.push(activeNode.data)
      }
    }
    arr.push(currArr)
    activeLevel = nextLevel
  }
  return arr
}

function test(testNow: boolean = false) {
  if (!testNow) return
  console.log('pre-order', traversePreOrder(egBinaryTree1))
  console.log('in-order', traverseInOrder(egBinaryTree1))
  console.log('post order', traversePostOrder(egBinaryTree1))
  console.log('level order', traverseLevelOrder(egBinaryTree1))
  console.log('level order 2d', traverseLevelOrder2D(egBinaryTree1))
}
test()
