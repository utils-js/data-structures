class BinaryTreeNode<T> {
  constructor(
    public data: T,
    public leftNode?: BinaryTreeNode<T>,
    public rightNode?: BinaryTreeNode<T>,
    public parentNode?: BinaryTreeNode<T>,
  ) {
    this.data = data;
  }
}

export default BinaryTreeNode;

// Example

export const egBinaryTree1 = new BinaryTreeNode<number>(
  20,
  new BinaryTreeNode<number>(
    100,
    new BinaryTreeNode<number>(50, new BinaryTreeNode<number>(222)),
    new BinaryTreeNode<number>(15),
  ),
  new BinaryTreeNode<number>(3, new BinaryTreeNode<number>(250), new BinaryTreeNode<number>(35)),
);
