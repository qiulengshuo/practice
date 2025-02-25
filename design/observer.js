class Observer {
  notify(data) {
    console.log(data);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }
  add(ob) {
    if (this.observerList.includes(ob)) return;
    this.observerList.push(ob);
  }
  notify(data) {
    this.observerList.forEach((item) => {
      item.notify(data);
    });
  }
}

const observer1 = new Observer();
const observer2 = new Observer();
const subject = new Subject();
subject.add(observer1);
subject.add(observer1);
subject.add(observer2);
subject.notify('更新了');
