const fn = (str) => {
  let arr = [];
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    const sameIndex = arr.findIndex((item) => item === str[i]);
    arr.push(str[i]);
    if (sameIndex > -1) {
      arr = arr.splice(sameIndex + 1);
    }
    max = Math.max(arr.length, max);
  }
  return max;
};


console.log(fn('abcabc'))
