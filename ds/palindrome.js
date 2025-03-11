const fn = (str) => {
  const set = new Set();
  str.split('').forEach((item) => {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  });
  return set.size <= 1;
};
fn('1');
