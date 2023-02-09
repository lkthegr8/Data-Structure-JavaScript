// create a function which thakes 2 input  first array and second the sub array length
// find the sub array having max sum in whole array

// eg: [1,2,5,2,8,1,5],2 => 10
// eg: [1,2,5,2,8,1,5],4 => 17
// eg: [4,2,1,6],1 => 6
// eg: [],2 => null

// naive solution
// 1. have first loop to iterate through array
// 2. have second loop inside that loop to iterate through sub array
// 3. maintain max sum

const maxSubArraySumNaive = (array, subArrLen) => {
  let arrLen = array.length;
  if (subArrLen > arrLen) {
    return null;
  }
  let maxSum = 0;
  for (let i = 0; i < arrLen - subArrLen + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < subArrLen; j++) {
      tempSum += array[i + j];
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
    }
  }
  return maxSum;
};
// console.log(maxSubArraySumNaive([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubArraySumNaive([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubArraySumNaive([], 2));

const maxSubArraySumRefactored = (array, subArrLen) => {
  let arrLen = array.length;
  if (subArrLen > arrLen) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;

  for (let j = 0; j < subArrLen; j++) {
    tempSum += array[j];
  }
  maxSum = tempSum;
  for (let i = subArrLen; i < arrLen; i++) {
    tempSum = tempSum - array[i - subArrLen] + array[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};
console.log(maxSubArraySumRefactored([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySumRefactored([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySumRefactored([], 2));
