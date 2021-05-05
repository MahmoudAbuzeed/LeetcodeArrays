/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let double = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    if (n == 0) {
      count += 1;
    }
    if ((arr.includes(n * 2) && n != 0) || count > 1) {
      double = true;
    }
  }

  return double;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([7, 1, 14, 11]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
console.log(checkIfExist([0, 0]));
