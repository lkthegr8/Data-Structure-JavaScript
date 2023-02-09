// so the question is is the second array square of the first array
// conditions
// there is no restrection on the order of the elements
// eg :- [1,2,3]=>[4,9,1] (correct)
// eg :- [1,2,3]=>[4,9,1,7] (incorrect)
// eg :- [1,2,1]=>[4,4,1] (incorrect)

// soulutin using O(n^2)
const checkSquare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (i in arr1) {
    index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
    console.log(arr2);
  }
  return true;
};

// console.log(checkSquare([1, 2, 3], [4, 9, 1]));
// console.log(checkSquare([1, 2, 1], [4, 4, 1]));

// soultion using O(n)/O(3n)
const checkSquareOptimised = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let arrayObject1 = {};
  let arrayObject2 = {};
  for (i in arr1) {
    element = arr1[i];
    arrayObject1[element] = (arrayObject1[element] || 0) + 1;
  }
  console.log(arrayObject1);

  for (i in arr2) {
    element = arr2[i];
    arrayObject2[element] = (arrayObject2[element] || 0) + 1;
  }
  console.log(arrayObject2);

  // comparing
  for (i in arr1) {
    element = arr1[i];
    console.log(arrayObject2[element ** 2]);
    if (!arrayObject2[element ** 2]) {
      return false;
    }
    if (arrayObject1[element] !== arrayObject2[element ** 2]) {
      return false;
    }
  }
  return true;
};

console.log(checkSquareOptimised([1, 2, 3], [4, 9, 1]));
console.log(checkSquareOptimised([1, 2, 1], [4, 4, 1]));
