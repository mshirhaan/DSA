var canJump = function(nums) {
    let need = 0;

    for(let i = nums.length - 2; i>= 0; i--){
        need++;
        if(nums[i] >= need) {
            need = 0;
        }
    }
    if(need == 0) return true;

    return false;
};
