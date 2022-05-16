// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {
  return nums.map((val) => val * val).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // Output: [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Output: [4,9,9,49,121]
