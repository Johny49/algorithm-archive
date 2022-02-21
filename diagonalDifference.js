// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Example: matrix arr:
// 1 2 3
// 4 5 6
// 7 8 9
// L-to-R diagonal: 1 + 5 + 9 = 15; R-to-L diagonal: 3 + 5 + 9 = 17; |15 - 17| = 2;
// Return: int: the absolute diagonal difference

function diagonalDifference(arr) {
    let lToRDiag = 0;
    let rToLDiag = 0;
    let j = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        // left to right
        lToRDiag += arr[i][i];
        // right to left
        rToLDiag += arr[i][j];
        j--;
    }
    return Math.abs(lToRDiag - rToLDiag);
}

const testArrA = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diagonalDifference(testArrA));

const testArrB = [
    [1, 2, 3, -2],
    [4, 5, 6, 8],
    [7, 8, 9, -5],
    [13, 4, -3, 9]
];
console.log(diagonalDifference(testArrB));
