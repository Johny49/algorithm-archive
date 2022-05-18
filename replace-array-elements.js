//Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

const replaceElements = (arr) => {
  let i = 0;
  while (i < arr.length - 1) {
    // replace element with max val to the right
    arr[i] = Math.max(...arr.slice(i + 1));
    i++;
  }
  // set last element to -1
  arr[arr.length - 1] = -1;
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // Output = [18,6,6,1,-1]
console.log(replaceElements([400])); // Output = [-1]
