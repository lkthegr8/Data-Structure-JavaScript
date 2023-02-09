// fibonachi series using function recursion

const fibonachi = (num) => {
  if (num < 2) {
    return num;
  }
  let res = fibonachi(num - 1) + fibonachi(num - 2);
  return res;
};

console.log(fibonachi(9));
