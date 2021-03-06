// 101. Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center).
// For example, this binary tree[1, 2, 2, 3, 4, 4, 3] is symmetric:
//       1
//     /   \
//    2     2
//   / \   / \
// 3   4  4   3
// But the following[1, 2, 2, null, 3, null, 3] is not:
//       1
//      / \
//     2   2
//     \    \
//      3    3
// Follow up: Solve it both recursively and iteratively.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const isSymmetric = function(root) {
    if (root === null) return true;

    function isMirrored(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;

        return root1.val === root2.val && isMirrored(root1.left, root2.right) && isMirrored(root1.right, root2.left);
    }
    return isMirrored(root.left, root.right);
}

