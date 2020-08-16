class BSTNode<T> {
  constructor(
    public data: T,
    public leftNode?: BSTNode<T>,
    public rightNode?: BSTNode<T>,
  ) {
    this.data = data
  }
}
export default BSTNode

export const egBst1 = new BSTNode<number>(
  100,
  new BSTNode<number>(
    80,
    new BSTNode<number>(
      70,
      new BSTNode<number>(50, new BSTNode<number>(40), new BSTNode<number>(60)),
    ),
    new BSTNode<number>(90),
  ),
  new BSTNode<number>(
    200,
    new BSTNode<number>(150),
    new BSTNode<number>(
      300,
      new BSTNode<number>(250),
      new BSTNode<number>(400),
    ),
  ),
)
