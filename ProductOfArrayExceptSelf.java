class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;

        int[] left = new int[n];
        int[] right = new int[n];

        int p = 1;

        for(int i = 0; i<n; i++) {
            left[i] = p;
            p = p * nums[i];
        }

        p = 1;

        for(int i = n-1; i>=0; i--) {
            right[i] = p;
            p = p * nums[i];
        }

        int res[] = new int[n];

        for(int i = 0; i<n; i++) {
            res[i] = left[i] * right[i];
        }

        return res;

    }
}
