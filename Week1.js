// Single Number
// Given a non - empty array of integers, every element appears twice except for one.Find that single one.
//  Note:
// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?
//  Example 1:
// Input: [2, 2, 1]
// Output: 1
// Example 2:
// Input: [4, 1, 2, 1, 2]
// Output: 4

// // /************************************************
//  * @param {number[]} nums
//  * @return {number}
//  */
var singleNumber = function (nums) {
  let result;
  for(let i = 0; i < nums.length;i++) {
    if (!nums.slice(0,i).includes(nums[i]) && !nums.slice(i + 1).includes(nums[i])) result = nums[i];
  }
  return result;
}

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));

// Happy Number

// Write an algorithm to determine if a number n is "happy".
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay), or it loops 
// endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
// Return True if n is a happy number, and False if not.
//  Example:
//  Input: 19
//  Output: true

//    Explanation:
//    1*1 + 9*9 = 82
//    8*8 + 2*2 = 68
//    6*6 + 8*8 = 100
//    1*1 + 0*0 + 0*0 = 1

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
var isHappy = function (n) {
  

};
function squareDigits(num) {
  let sqaureSum = 0;
  while (num > 9) {
    let digit = num % 10;
    sqaureSum += digit * digit;
  }
  
}