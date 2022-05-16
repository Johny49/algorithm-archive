// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

const duplicateZeros = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == 0) {
      // insert zero
      arr.splice(i, 0, 0);
      // drop last val
      arr.pop();
      i++;
    }
    i++;
  }
  console.log(arr);
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // Output: [1,0,0,2,3,0,0,4]
duplicateZeros([1, 2, 3]); // Output: [1,2,3]
