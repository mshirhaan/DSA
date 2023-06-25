class Solution {
    public List<List<Integer>> subsets(int[] nums) {

        List<List<Integer>> res = new ArrayList<>();
        return subsetHelper(nums, 0, new ArrayList<Integer>(),  res);
    }

    private List<List<Integer>> subsetHelper(int[] nums, int index, List<Integer> bag, List<List<Integer>> res) {
        if(index == nums.length) {
          System.out.println(bag.toString());
          res.add(new ArrayList<>(bag));
          return res;
        }
        bag.add(nums[index]);
        subsetHelper(nums, index+1, bag, res);
        bag.remove(bag.size()-1);
        subsetHelper(nums, index+1, bag, res);
        return res;
    }
}
