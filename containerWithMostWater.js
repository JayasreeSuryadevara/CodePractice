// Given n non - negative integers a1, a2, ..., an, where each represents a point 
// at coordinate(i, ai).n vertical lines are drawn such that the two endpoints of 
// line i is at(i, ai) and(i, 0).Find two lines, 
// which together with x - axis forms a container, 
// such that the container contains the most water.

//   Note: You may not slant the container and n is at least 2.
// Example:

// Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49

// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function (height) {
//   let maxToHere = height[0];
//   let maxSoFar = height[0];

//   for(let i = 1; i < height.length; i++){

//     let newMax = height[i] + maxToHere;
//     maxToHere = Math.max(newMax, height[i]);

//     maxSoFar = Math.max(maxSoFar, maxToHere);

//   }
//   return maxSoFar;
// };


// var maxArea = function(height) {
//   let max = 0;
  
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let currentVolume = Math.min(height[i], height[j]) * (j - i);
//       max = Math.max(max, currentVolume);
//     }
//   }
//   return max;
// }

var maxArea = function (height) {
  let max1 = [height[0], 0];

  for (let i = 1; i < height.length; i++) {
    if (height[i] > max1[0]) {
      max1[0] = height[i];
      max1[1] = i;
    }
  }
  let maxVal = 0;

  for (let j = 0; j < height.length; j++) {
    let len = Math.abs(max1[1] - j);
    let val = Math.min(max1[0], height[j]);
    maxVal = Math.max(maxVal, len * val);
  }

  return maxVal;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))