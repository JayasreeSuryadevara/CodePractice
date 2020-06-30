// Leet code # 27
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
var removeElement = function(nums, val) {
    // for (let i = 0; i < nums.length; i++ ) {
    //     let cur = nums[i];
    //     let first = nums[0];
        
    //     if (cur === val) {
    //         nums[0]= cur;
    //         nums[i] = first;
    //         i--;
    //         nums.shift();
    //     } 
    // }
    // return nums.length;

    let i = 0;
    let j = nums.length - 1;

    while (i < j){
        if (nums[i] === val) {
            while (nums[j] === val) j--;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        i++;
    }
    console.log(nums, i)
    while (nums[i] != val && nums[i]) i++;
    console.log(nums, i)
    return j > 0 ? i : 0
};

// console.log(removeElement([3, 2, 2, 3], 3)); //2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));//5
console.log(removeElement([3, 3], 3));//0



const removeElement = (nums, val) => {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i]
            index++
        }
    }
    return index
};