// a sorted array is given and we have to find the first pair whose addition is 0
// eg:[1,1,2,2,2,3,4,5]=>5
// eg:[]=>0
// eg:[2]=>1

// we will have two pointers one at 0 and other at 1 index of array

const countUnique = (array) => {
  arrayLength = array.length;
  if (arrayLength < 2) {
    return arrayLength;
  }

  let i = 0;
  let j = 1;
  for (let j = 1; j < arrayLength; j++) {
    if (array[i] != array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};

console.log(countUnique([1, 1, 2, 2, 2, 3, 4, 5]));
console.log(countUnique([]));
console.log(countUnique([2]));
