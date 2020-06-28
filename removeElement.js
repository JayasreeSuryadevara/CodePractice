// Leet code # 27
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++ ) {
        let cur = nums[i];
        let first = nums[0];
        
        if (cur === val) {
            nums[0]= cur;
            nums[i] = first;
            i--;
            nums.shift();
        } 
    }
    return nums.length;
};
