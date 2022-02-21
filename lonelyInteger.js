// Given an array of integers, where all elements but one occur twice, find the unique element.
// Example: a = [1,2,3,4,3,2,1] // unique element is 4
// Returns int: the element that occurs only once;
// Constraints: 1 <= n <= 100; It is guaranteed that  is an odd number and that there is one unique element; 0 <= a[i] <= 100, where 0 <= i < n;

function lonelyInteger(a) {
    let ordered = a.sort();
    for (let i = 0; i < ordered.length; i += 2) {
        if (ordered[i] !== ordered[i + 1]) {
            return ordered[i];
        }
    }
}

let example = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyInteger(example));
// Expected: 4

let secondEx = [2, 36, 67, 67, 2, 37, 93, 36, 93];
console.log(lonelyInteger(secondEx));
// Expected: 37
