// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const merge = (nums1, m, nums2, n) => {
  // replace 0s at end of nums1 with n vals from nums2
  nums1.splice(m, n, ...nums2);

  // sort updated nums1
  nums1.sort((a, b) => a - b);

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // Output: [1,2,2,3,5,6]
merge([1], 1, [], 0); // Output: [1]
merge([0], 0, [1], 1); // Output: [1]
merge([1, 5, 37, 42, 44, 65, 72, 82, 0, 0, 0, 0, 0], 8, [4, 19, 33, 52, 56], 5); // Output: [1, 4, 5, 19, 33, 37, 42, 44, 52, 56, 65, 72, 82];
