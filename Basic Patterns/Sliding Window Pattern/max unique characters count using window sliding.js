// finding the max unique subString in a string
// eg: "abcadab" => 4

// i have found of 3 methods

// 1. first method, it has the time complexicity of O(n^2)
const maxUniqueSubstringNaiveMethod = (string) => {
  let MaxLength = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j <= string.length; j++) {
      let set = new Set([...string.substring(i, j)]);
      if (set.size > MaxLength) {
        MaxLength = set.size;
      }
    }
  }
  return MaxLength;
};

// console.log(maxUniqueSubstringNaiveMethod("abcadab"));

// 2. SECOND method, it has the time complexicity of O(2n)
const maxUniqueSubstringOkMethod = (string) => {
  let MaxLength = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  let visitedObject = {};

  for (rightPointer = 0; rightPointer < string.length; rightPointer++) {
    console.log(visitedObject);
    let char = string[rightPointer];

    while (visitedObject[char]) {
      delete visitedObject[string[leftPointer]];
      leftPointer++;
    }
    MaxLength = Math.max(rightPointer - leftPointer + 1, MaxLength);
    visitedObject[char] = 1;
  }

  return MaxLength;
};

// console.log(maxUniqueSubstringOkMethod("abcadasdrgsdfguihnqb"));

// 3. thirds method, it has the time complexicity of O(n)
const maxUniqueSubstringOptimsed = (string) => {
  let MaxLength = 0;
  let leftPointer = 0;
  let visitedObject = {};

  for (let rightPointer = 0; rightPointer < string.length; rightPointer++) {
    console.log(visitedObject);
    let char = string[rightPointer];

    if (visitedObject[char]) {
      leftPointer = Math.max(visitedObject[char] + 1, leftPointer);
    }
    MaxLength = Math.max(rightPointer - leftPointer + 1, MaxLength);
    visitedObject[char] = rightPointer;
  }

  return MaxLength;
};

console.log(maxUniqueSubstringOptimsed("abcadasdrgsdfguihnqb"));
