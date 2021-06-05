/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums == null || nums.length <= 1) return nums;

  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) nums[lastNonZeroIndex++] = nums[i];
  }
  for (let i = lastNonZeroIndex; i < nums.length; i++) nums[i] = 0;

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
