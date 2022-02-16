// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// arr = an array of 5 integers
function miniMaxSum(arr) {
    let sorted = arr.sort((a, b) => a - b);

    let min = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        min += arr[i];
    }

    let max = 0;
    for (let i = 1; i < sorted.length; i++) {
        max += arr[i];
    }

    console.log(`${min} ${max}`);
}

let testArr = [1, 3, 5, 7, 9];
miniMaxSum(testArr);

let secondTestArr = [98, 23, 17, 32, 8];
miniMaxSum(secondTestArr);
