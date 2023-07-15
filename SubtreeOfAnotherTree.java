class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if(subRoot == null) return true;
        if(root == null) return false;
        if(isSameTree(root, subRoot) == true) return true;

        if(isSubtree(root.left, subRoot) == true) return true;
        return isSubtree(root.right, subRoot);
    }

    private boolean isSameTree(TreeNode p, TreeNode q) {
        return dfs(p, q);
    }

    private boolean dfs(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        }

        if (p == null || q == null) {
            return false;
        }

        if (p.val != q.val) return false;

        boolean left = dfs(p.left, q.left);
        if(left == false) return false;
        boolean right = dfs(p.right, q.right);

        return left && right;
    }

}
