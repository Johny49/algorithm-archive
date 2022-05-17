// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

const checkIfExist = (arr) => {
  let output = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i] * 2 || arr[i] === arr[j] * 2) {
        output = true;
      }
    }
  }
  return output;
};

console.log(checkIfExist([10, 2, 5, 3])); // Output: true
console.log(checkIfExist([7, 1, 14, 11])); // Output: true
console.log(checkIfExist([3, 1, 7, 11])); // Output: false
