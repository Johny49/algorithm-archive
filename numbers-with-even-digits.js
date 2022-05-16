// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = (nums) => {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i].toString().length;

    if (val % 2 == 0) {
      counter++;
    }
  }
  return counter;
};

console.log(findNumbers([555, 901, 482, 1771]));
console.log(findNumbers([12, 345, 2, 6, 7896]));
