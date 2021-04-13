/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (var i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  return nums1.sort((a, b) => {
    return a - b;
  });

  //Another solution
  // nums1.length = m;
  // return (nums1 = [...nums1, ...nums2].sort((a, b) => {
  //   return a - b;
  // }));
  //   console.log(nums1);
  //   console.log(nums1.length);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
