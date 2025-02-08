const formatTime = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    const weekList = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const week = weekList[date.getDay()];
    return `${year}-${month}-${day} ${hour}:${min}:${s} ${week}`;
};

console.log(formatTime(new Date()));
