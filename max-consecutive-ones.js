// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function (nums) {
  let maxConsecutive = 0;
  let currentConsecutive = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log("val = ", nums[i]);
    if (nums[i] === 0) {
      currentConsecutive = 0;
      console.log("0", currentConsecutive);
    } else {
      currentConsecutive += 1;
      console.log("1", currentConsecutive);
      if (currentConsecutive > maxConsecutive) {
        maxConsecutive = currentConsecutive;
      }
    }
  }
  return maxConsecutive;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
