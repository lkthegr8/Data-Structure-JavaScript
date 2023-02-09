// soultion using O(n)/O(3n)
// const checkAnagramOptimised = (string1, string2) => {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   let charObject1 = {};
//   let charObject2 = {};
//   for (character of string1) {
//     charObject1[character] = (charObject1[character] || 0) + 1;
//   }
//   console.log(charObject1);

//   for (character of string2) {
//     charObject2[character] = (charObject2[character] || 0) + 1;
//   }
//   console.log(charObject2);

//   // comparing
//   for (character of string1) {
//     console.log(charObject2[character]);
//     if (!charObject2[character]) {
//       return false;
//     }
//     if (charObject1[character] !== charObject2[character]) {
//       return false;
//     }
//   }
//   return true;
// };

// using single object
const checkAnagramOptimised = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  let charObject1 = {};
  for (character of string1) {
    charObject1[character] = (charObject1[character] || 0) + 1;
  }
  console.log(charObject1);

  // comparing
  for (character of string2) {
    if (!charObject1[character]) {
      return false;
    }
    if (--charObject1[character] < 0) {
      return false;
    }
  }
  return true;
};

console.log(checkAnagramOptimised("", ""));
console.log(checkAnagramOptimised("anagram", "nagaram"));
console.log(checkAnagramOptimised("iceman", "cinema"));
console.log(checkAnagramOptimised("zza", "aaz"));
