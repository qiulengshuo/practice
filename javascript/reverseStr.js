const str = 'abcde';
console.log(str.split('').reverse().join(''));
console.log(Array.from(str).reduce((prev, cur) => `${cur}${prev}`));
