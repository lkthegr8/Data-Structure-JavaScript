// a sorted array is given and we have to find the first pair whose addition is 0
// eg:[-3,2,1,0,1,2,3]=>[-3,3]
// eg:[-3,2,1,0,4,5,6]=>undefined

// we will have two pointers one at start and one at end

const checkForZeroPair = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    sum = arr[i] + arr[j];
    if (sum == 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
};

console.log(checkForZeroPair([-3, 2, 1, 0, 1, 2, 3]));
console.log(checkForZeroPair([-3, 2, 1, 0, 4, 5, 6]));
