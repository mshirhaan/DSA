class Solution {
    public int maxArea(int[] height) {
        int res = 0;

        int left = 0, right = height.length-1;

        while(left<right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            res = Math.max(res, area);

            if(height[left] > height[right]) right--;
            else left++;
        }

        return res;
    }
}
