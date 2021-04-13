/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
      console.log(nums);
    }
  }

  return i + 1;

  // another solution
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length - 1; j++) {
  //       if (nums[i] == nums[j]) {
  //         count += 1;
  //         nums[i] = null;
  //       }
  //     }
  //   }
  //   return count;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
