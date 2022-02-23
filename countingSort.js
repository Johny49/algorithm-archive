// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.
// Example: arr = [1,1,3,2,1] => all values in range [0...3] => create array of zeros => result = [0,0,0,0] => Frequency array is [0,3,1,1] => sorted as [1,1,1,2,3]
// Note: For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.
// Challenge: Given a list of integers, count and return the number of times each value appears as an array of integers.
// Input Format: The first line contains an integer n, the number of items in arr. Each of the next n lines contains an integer arr[i] where 0 <= n <= n.
// Constraints: 100 < n < 10^6; 0 <= arr[i] < 100


function countingSort(arr) {
    // initialise frequency count array with 0 values
    const freqArr = Array.apply(0, Array(100)).map(x => 0);
    // iterate through input array and increment counts accordingly
    for (let val of arr) {
        freqArr[val] += 1;
    }
    return freqArr
}

let testArr = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33,];
console.log(countingSort(testArr));
