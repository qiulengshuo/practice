let symbolName = Symbol();
class Person {
    constructor(name) {
        this[symbolName] = name;
    }
    get name() {
        return this[symbolName];
    }
    set name(newValue) {
        this[symbolName] = newValue;
    }
}

const p = new Person('hello');
console.log(p.name);
p.name = 'world';
console.log(p.name);

// let symbolName = Symbol();
// class Person {
//     #name
//     constructor(name) {
//         this.#name = name;
//     }
//     get name() {
//         return this.#name;
//     }
//     set name(newValue) {
//         this.#name = newValue;
//     }
// }

// const p = new Person('hello');
// console.log(p.name);
// p.name = 'world';
// console.log(p.name);
