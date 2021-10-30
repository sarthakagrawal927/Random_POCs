function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function invertingBinaryTree(Tree root) {
  if (root == null) {
    return;
  }
  var temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertingBinaryTree(root.left);
  invertingBinaryTree(root.right);
}