/***
    Question:

    Q1:
    In one of our applications, we use a binary search tree (BST) to represent and store
    a sequence of sorted data. But unfortunately our developer made a mistake that
    the data in the BST are stored in reversed order.

    Write a program to collect the BST so that the data are stored in correct order.
    For example, we expect the data in the BST are in ascending order: [1, 2, 3, 4].
    But the current actual data are: [4, 3, 2, 1]

    Q2: explain dependency inject pattern, and why scoped injection?

    Q3: explain asp.net core http request pipeline

*/

public class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int val) : this(val, null)
    {
    }

    TreeNode(int val, TreeNode left, TreeNode right)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    public TreeNode inverseTree(TreeNode root)
    {
        if (root = null) return null;

        TreeNode left = root.left;
        TreeNode right = root.right;

        root.left = inverseTree(right);
        root.right = inverseTree(left);

        return root;
    }
}