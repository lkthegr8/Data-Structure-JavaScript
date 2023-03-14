// it has time complexicity of n log(n)
const merge = (arr1, arr2) => {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
};

console.log(mergeSort([4, 8, 5, 7, 6, 3, 9, 2, 1]));
