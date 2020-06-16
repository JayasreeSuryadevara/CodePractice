// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.
// The overall run time complexity should be O(log(m + n)). Neglect this part for now
// You may assume nums1 and nums2 cannot be both empty.
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

var findMedianSortedArrays = function(nums1, nums2) {
	let totalLen = nums1.length + nums2.length
	let targetLen;
	if (totalLen % 2 === 1) {
		targetLen = Math.floor(totalLen / 2)
	} else {
		targetLen = totalLen / 2
	}
	let lastChecked = new Array(2).fill(0);
	for (let i = 0; i <= targetLen; i++) {
		let lowest;

		if (nums1.length && nums2.length) {
			lowest = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift()
		} else if (nums2.length) {
			lowest = nums2.shift()
		} else {
			lowest = nums1.shift()
		}
		
		lastChecked[0] = lastChecked[1]//[2, 3]
		lastChecked[1] = lowest
	}
	// [1, 2, 3, 4]
	if (totalLen % 2 === 1) {
		return lastChecked[1]
	} else {
		let sum = lastChecked[0] + lastChecked[1]
		return sum / 2
	}
	
}

console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,4], [2,3]));
console.log(findMedianSortedArrays([1,2], [3,4]));


