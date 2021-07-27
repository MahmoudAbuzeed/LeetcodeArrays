/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let wrongIndices = 0;
  const tempHeights = [].concat(heights);
  heights.sort((a, b) => parseInt(a) - parseInt(b));
  for (let i = 0; i < heights.length; i++) {
    if (tempHeights[i] !== heights[i]) wrongIndices += 1;
  }
  return wrongIndices;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));
console.log(
  heightChecker([
    10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
  ])
);
