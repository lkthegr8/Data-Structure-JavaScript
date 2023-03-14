// given array of random number
// find maximum consicitive number
// without sorting

let findConsicitiveMaxLength = (array) => {
  //   array = array.sort((a, b) => a - b);
  console.log(array);
  let maxConsicitiveLength = 0,
    tempMax = 1;
  for (let i = 0; i < array.length - 1; i++) {
    if (Math.abs(array[i] - array[i + 1]) == 1) {
      tempMax++;
    } else {
      tempMax = 1;
    }
    if (tempMax > maxConsicitiveLength) {
      maxConsicitiveLength = tempMax;
    }
  }
  return maxConsicitiveLength;
};

// console.log(findConsicitiveMaxLength([5, 6, 7, 100, 99, 86, 66]));
console.log(findConsicitiveMaxLength([101, 105, 104, 2, 3, 7, 9, 11, 10, 8]));
