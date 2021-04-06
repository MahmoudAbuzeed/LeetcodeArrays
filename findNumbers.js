/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenNumberCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (JSON.stringify(nums[i]).length % 2 == 0) {
      evenNumberCount += 1;
    }
  }
  return evenNumberCount;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
