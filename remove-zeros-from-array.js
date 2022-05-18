// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

const moveZeros = (nums) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    } else {
      i++;
    }
  }
  console.log(nums);
};

moveZeros([0, 1, 0, 3, 12]); // Output: [1,3,12,0,0]
moveZeros([0]); // Output: [0]
