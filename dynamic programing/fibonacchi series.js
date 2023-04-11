// fibonachi series using function recursion
let memory = [];

const fibonachi = (num) => {
  if (num <= 2) {
    return 1;
  }
  if (memory[num] != undefined) {
    return memory[num];
  }

  let res = fibonachi(num - 1) + fibonachi(num - 2);
  memory[num] = res;
  return res;
};

console.log(fibonachi(45));
