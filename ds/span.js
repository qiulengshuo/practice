// spans 数组间隔持续时间
const spans = [
  {
    startTime: 1,
    endTime: 5,
  },
  {
    startTime: 3,
    endTime: 7,
  },
  {
    startTime: 8,
    endTime: 12,
  },
];
var merge = function (intervals) {
  const res = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    if (prev.endTime < cur.startTime) {
      res.push(prev);
      prev = cur;
    } else {
      if (prev.endTime < cur.endTime) {
        prev.endTime = cur.endTime;
      } else {
        continue;
      }
    }
  }
  res.push(prev);

  return res.reduce((prev, cur) => {
    prev.push(cur.endTime - cur.startTime);
    return prev;
  }, []);
};
console.log(merge(spans));
