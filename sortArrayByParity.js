/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const oddNumbers = [];
  const evenNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 == 0 ? evenNumbers.push(nums[i]) : oddNumbers.push(nums[i]);
  }

  return [...evenNumbers, ...oddNumbers];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
