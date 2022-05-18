// Given an array of integers arr, return true if and only if it is a valid mountain array.
//  Recall that arr is a mountain array if and only if:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

const validMountainArray = (arr) => {
  let output = false;

  console.log(arr);
  if (arr.length >= 3) {
    if (arr[0] >= arr[1]) {
      return output;
    } else {
      // climbing
      let i = 1;
      let descent = false;
      while (arr[i] < arr[i + 1]) {
        i++;
      }
      // descent
      descent = true;
      while (arr[i] > arr[i + 1] && i < arr.length - 2) {
        i++;
      }
      // check if descent reached the end
      console.log(i, arr.length - 1);
      if (i + 1 === arr.length - 1 && arr[i] > arr[i + 1]) {
        output = true;
      }
    }
  }
  return output;
};

console.log(validMountainArray([2, 1])); // Output: false
console.log(validMountainArray([3, 5, 5])); // Output: false
console.log(validMountainArray([0, 3, 2, 1])); // Output: true
console.log(validMountainArray([1, 3, 2])); // Output: true
console.log(validMountainArray([3, 5, 5])); // Output: false
console.log(validMountainArray([2, 0, 2])); // Output: false
console.log(validMountainArray([0, 3, 2, 1])); // Output: true
