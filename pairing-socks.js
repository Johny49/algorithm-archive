// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, arr) {
  let pairs = 0;
  let colorSet = new Set(arr);

  for (const col of colorSet) {
    pairs += Math.floor(arr.filter((i) => i === col).length / 2);
  }

  console.log(pairs);
  return pairs;
}

sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]); // Expected Output: 2
sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // Expected Output: 4
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // Expected Output: 3
